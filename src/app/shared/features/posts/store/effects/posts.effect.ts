import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import { environment } from '../../../../../../environments/environment';

import { Post } from '../../models';
import * as RouterActions from '../../../../../store';
import * as postsActions from '../actions/posts.action';
import * as fromServices from '../../services';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private service: fromServices.PostsService
  ) {}

  @Effect()
  loadPosts$ = this.actions$.ofType(postsActions.PostsActionTypes.LoadPosts).pipe(
    switchMap(() => {
      return this.service
        .load()
        .pipe(
          map(posts => new postsActions.LoadPostsSuccess({posts})),
          catchError(error => of(new postsActions.LoadPostsFail(error)))
        );
    })
  );

  @Effect()
  addPost$ = this.actions$.ofType(postsActions.PostsActionTypes.AddPost)
  .pipe(
    map((action: postsActions.AddPost) => action.payload.post),
    switchMap((post: Post) => {
      return this.service
        .add(post)
        .pipe(
          map((post: Post) => new postsActions.AddPostSuccess({post})),
          catchError(error => of(new postsActions.AddPostFail(error)))
        );
    })
  );

  @Effect()
  addPostSuccess$ = this.actions$
    .ofType(postsActions.PostsActionTypes.AddPostSuccess)
    .pipe(
      map((action: postsActions.AddPostSuccess) => action.payload.post),
      mergeMap((post: Post) => {
        const actions = [];
        if(environment.production && !post.isDraft){
          actions.push(new postsActions.NotificationPost({post}))
        }
        actions.push(new RouterActions.Go({
          path: ['/admin/posts'],
        }));
        return actions;
      })
    );

  @Effect()
  notificationPost$ = this.actions$.ofType(postsActions.PostsActionTypes.NotificationPost)
    .pipe(
      map((action: postsActions.NotificationPost) => action.payload.post),
      switchMap((post: Post) => {
        return this.service
          .notification(post)
          .pipe(
            map((post: Post) => new postsActions.NotificationPostSuccess({post})),
            catchError(error => of(new postsActions.NotificationPostFail(error)))
          );
      })
    );

  @Effect()
  notificationPostSuccess$ = this.actions$
      .ofType(postsActions.PostsActionTypes.NotificationPostSuccess)
      .pipe(
        map((action: postsActions.NotificationPostSuccess) => action.payload.post),
        map((post: Post) => console.log('Notification success', post)),
      );

  @Effect()
  notificationPostFail$ = this.actions$
      .ofType(postsActions.PostsActionTypes.NotificationPostFail)
      .pipe(
        map((action: postsActions.NotificationPostFail) => action.payload),
        map((error: any) => console.error('Notification fail', error)),
      );

  @Effect()
  updatePost$ = this.actions$.ofType(postsActions.PostsActionTypes.UpdatePost)
  .pipe(
    map((action: postsActions.UpdatePost) => action.payload.post),
    switchMap((post: Post) => {
      return this.service
        .update(post._id, post)
        .pipe(
          map(post => new postsActions.UpdatePostSuccess({post})),
          catchError(error => of(new postsActions.UpdatePostFail(error)))
        );
    })
  );

  @Effect()
  deletePost$ = this.actions$.ofType(postsActions.PostsActionTypes.DeletePost)
  .pipe(
    map((action: postsActions.DeletePost) => action.payload.id),
    switchMap(id => {
      return this.service
        .delete(id)
        .pipe(
          map(id => new postsActions.DeletePostSuccess({id})),
          catchError(error => of(new postsActions.DeletePostFail(error)))
        );
    })
  );

  @Effect()
  handlePostsSuccess$ = this.actions$
    .ofType(
      postsActions.PostsActionTypes.UpdatePostSuccess,
      postsActions.PostsActionTypes.DeletePostSuccess
    )
    .pipe(
      map((post: Post) => {
        return new RouterActions.Go({
          path: ['/admin/posts'],
        });
      })
    );
}
