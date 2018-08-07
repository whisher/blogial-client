import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Post } from '../../models/post.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-posts-post-list',
  template: `
  <div class="row">
    <div class="col-md-4">
      <strong>Title</strong>
    </div>
    <div class="col-md-1">
      <strong>Author</strong>
    </div>
    <div class="col-md-1">
      <strong>Status</strong>
    </div>
    <div class="col-md-2">
      <strong>Create</strong>
    </div>
    <div class="col-md-2">
      <strong>Update</strong>
    </div>
    <div class="col-md-2">
      <strong>Actions</strong>
    </div>
  </div>
  <admin-posts-post-item *ngFor="let post of posts | keyvalue" [post]="post.value"></admin-posts-post-item>
  `
})
export class AdminPostsPostListComponent{
 @Input() posts: Post[];
}
