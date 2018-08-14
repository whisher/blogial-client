import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Post } from '../../models/post.model';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-posts-post-list',
  templateUrl: './post-list.component.html'
})
export class AdminPostsPostListComponent {
 @Input() posts: Post[];
 @Input() hasPosts: boolean;
 @Output() deleted = new EventEmitter<Post>();

 onDelete(event){
   this.deleted.emit(event);
 }
}
