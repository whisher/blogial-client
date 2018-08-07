import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Post } from '../../models/post.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-posts-post-item',
  template: `
    <div class="row">
      <div class="col-md-4">
        {{post.title}}
      </div>
      <div class="col-md-1">
        {{post.author}}
      </div>
      <div class="col-md-1">
        {{post.status}}
      </div>
      <div class="col-md-2">
        {{post.created | date:'longDate'}}
      </div>
      <div class="col-md-2">
        {{post.updated | date:'longDate'}}
      </div>
      <div class="col-md-2">
        <a class="btn btn-info" [routerLink]="['/admin/posts/post', post._id]">
          Update
        </a>
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
  `
})
export class AdminPostsPostItemComponent {
  @Input() post: Post
}
