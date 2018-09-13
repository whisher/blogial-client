// Core
import { Component } from '@angular/core';

// Ngrx
import { Store, select } from '@ngrx/store';

// Store
import { Post } from '../../../../../core/posts/models';
import * as fromPosts from '../../../../../core/posts/store';

// Confirm Modal
import { IsPristineAware } from '../../../../../shared/ui/confirm/confirm.component';

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
export class AdminPostsPostPageComponent implements IsPristineAware {

  pending$ = this.store.pipe(select(fromPosts.getPostsLoading));
  error$ = this.store.pipe(select(fromPosts.getPostsError));
  selectedPost$ = this.store.pipe(select(fromPosts.getSelectedPost));
  _isPristine = true;

  constructor(private store: Store<fromPosts.State>) { }

  onIsPristine($event){
    this._isPristine = $event;
  }

  onSubmit($event: Post) {
    const post = $event;
    console.log('post',post);
    if(post._id){
      this.store.dispatch(new fromPosts.UpdatePost({post}))
    }
    else {
      delete post._id;
      this.store.dispatch(new fromPosts.AddPost({post}))
    }
  }

  isPristine(): boolean{
    return this._isPristine;
  }
}
