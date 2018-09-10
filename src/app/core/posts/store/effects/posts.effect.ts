import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap, tap } from 'rxjs/operators';

import { environment } from '../../../../../environments/environment';

import { Post } from '../../models';
import * as RouterActions from '../../../../store';
import * as postsActions from '../actions/posts.action';
import * as fromServices from '../../services';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private service: fromServices.PostsService
  ) {}

  @Effect()
  loadPosts$ = this.actions$.pipe(
    ofType(postsActions.PostsActionTypes.LoadPosts),
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
  addPost$ = this.actions$
  .pipe(
    ofType(postsActions.PostsActionTypes.AddPost),
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
    .pipe(
      ofType(postsActions.PostsActionTypes.AddPostSuccess),
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
  notificationPost$ = this.actions$
    .pipe(
      ofType(postsActions.PostsActionTypes.NotificationPost),
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

  @Effect({ dispatch: false })
  notificationPostSuccess$ = this.actions$
      .pipe(
        ofType(postsActions.PostsActionTypes.NotificationPostSuccess),
        map((action: postsActions.NotificationPostSuccess) => action.payload.post),
        tap((post: Post) => console.log('Notification success', post)),
      );

  @Effect({ dispatch: false })
  notificationPostFail$ = this.actions$
      .pipe(
        ofType(postsActions.PostsActionTypes.NotificationPostFail),
        map((action: postsActions.NotificationPostFail) => action.payload),
        tap((error: any) => console.error('Notification fail', error)),
      );

  @Effect()
  updatePost$ = this.actions$
  .pipe(
    ofType(postsActions.PostsActionTypes.UpdatePost),
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
  deletePost$ = this.actions$
  .pipe(
    ofType(postsActions.PostsActionTypes.DeletePost),
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
    .pipe(
      ofType(
        postsActions.PostsActionTypes.UpdatePostSuccess,
        postsActions.PostsActionTypes.DeletePostSuccess
      ),
      map((post: Post) => {
        return new RouterActions.Go({
          path: ['/admin/posts'],
        });
      })
    );
}
