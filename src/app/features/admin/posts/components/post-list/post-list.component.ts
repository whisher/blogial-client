import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Post } from '../../models/post.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-posts-post-list',
  template: `
  <ng-container *ngIf="hasPosts; else noPosts">
    <div class="row no-gutters border-bottom pb-1 mb-1">
      <div class="col-md-1">
        <strong>Thumb</strong>
      </div>
      <div class="col-md-4">
        <strong>Title</strong>
      </div>
      <div class="col-md-2">
        <strong>Author</strong>
      </div>
      <div class="col-md-1">
        <strong>Status</strong>
      </div>
      <div class="col-md-1">
        <strong>Create</strong>
      </div>
      <div class="col-md-1">
        <strong>Update</strong>
      </div>
      <div class="col-md-2 text-center">
        <strong>Actions</strong>
      </div>
    </div>
    <admin-posts-post-item *ngFor="let post of posts | keyvalue" [post]="post.value" (deleted)="onDelete($event)"></admin-posts-post-item>
  </ng-container>
  <ng-template #noPosts>
    <div class="alert alert-info" role="alert">
      There are no posts yet.
    </div>
  </ng-template>
  `
})
export class AdminPostsPostListComponent {
 @Input() posts: Post[];
 @Input() hasPosts: boolean;
 @Output() deleted = new EventEmitter<Post>();

 onDelete(event){
   this.deleted.emit(event);
 }
}
