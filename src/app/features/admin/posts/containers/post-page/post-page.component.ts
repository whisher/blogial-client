import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromPosts from '../../shared/store';
import * as fromAuthentication from '../../../../authentication/shared/store';
import { Post } from '../../models';


@Component({
  selector: 'admin-posts-post-page',
  template: `
    <admin-posts-post-form
    (submitted)="onSubmit($event)"
    (isPristine)="onIsPristine($event)"
    [pending]="pending$ | async"
    [error]="error$ | async"
    [selectedPost]="selectedPost$ | async"
    [account]="account$ | async"></admin-posts-post-form>
  `
})
export class AdminPostsPostPageComponent {

  pending$ = this.store.pipe(select(fromPosts.getPostsLoading));
  error$ = this.store.pipe(select(fromPosts.getPostsError));
  selectedPost$ = this.store.pipe(select(fromPosts.getSelectedPost));
  isFormPristine = true;
  account$ = this.authStore.pipe(select(fromAuthentication.getAccount));

  constructor(
    private authStore: Store<fromAuthentication.State>,
    private store: Store<fromPosts.State>
  ) { }

  onIsPristine($event){
    this.isFormPristine = $event;
  }

  onSubmit($event: Post) {
    const post = $event;
    if(post._id){
      this.store.dispatch(new fromPosts.UpdatePost({post}))
    }
    else{
      this.store.dispatch(new fromPosts.AddPost({post}))
    }
  }

}
