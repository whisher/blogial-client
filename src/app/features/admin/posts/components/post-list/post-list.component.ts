import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Post } from '../../models/post.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-posts-post-list',
  template: `
  <ng-container *ngIf="hasPosts; else noPosts">
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
    <admin-posts-post-item *ngFor="let post of posts | keyvalue" [post]="post.value" (deleted)="onDelete($event)"></admin-posts-post-item>
  </ng-container>
  <ng-template #noPosts>
    <div class="alert alert-info" role="alert">
      There are no posts yet.
    </div>
  </ng-template>
  `
})
export class AdminPostsPostListComponent implements OnInit{
 @Input() posts: Post[];
 @Output() deleted = new EventEmitter<Post>();
 hasPosts = false;
 constructor(){}
 ngOnInit(){
   this.hasPosts = !!Object.keys(this.posts).length;
 }
 onDelete(event){
   this.deleted.emit(event);
 }
}
