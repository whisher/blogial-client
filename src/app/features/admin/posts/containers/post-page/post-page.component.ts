import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromPosts from '../../shared/store';
import { Post } from '../../models';


@Component({
  selector: 'admin-posts-post-page',
  template: `
    <admin-posts-post-form
    (submitted)="onSubmit($event)"
    (isPristine)="onIsPristine($event)"
    [pending]="pending$ | async"
    [error]="error$ | async"
    [selectedPost]="selectedPost$ | async"></admin-posts-post-form>
  `
})
export class AdminPostsPostPageComponent {

  pending$ = this.store.pipe(select(fromPosts.getPostsLoading));
  error$ = this.store.pipe(select(fromPosts.getPostsError));
  selectedPost$ = this.store.pipe(select(fromPosts.getSelectedPost));
  isFormPristine = true;

  constructor(private store: Store<fromPosts.State>) { }

  onIsPristine($event){
    this.isFormPristine = $event;
  }

  onSubmit($event: Post) {
    const post = $event;
    if(post._id){
      this.store.dispatch(new fromPosts.UpdatePost({post}))
    }
    else {
      delete post._id;
      console.log('this.frm.value',post);
      this.store.dispatch(new fromPosts.AddPost({post}))
    }
  }

}
