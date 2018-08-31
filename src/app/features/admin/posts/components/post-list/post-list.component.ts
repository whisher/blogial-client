import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Post } from '../../../../../shared/features/posts/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-posts-post-list',
  templateUrl: './post-list.component.html',
  host:{
    class: 'd-block my-3'
  }
})
export class AdminPostsPostListComponent {
  @Input() posts: Post[];
  @Input() hasPosts: boolean;
  @Output() deleted = new EventEmitter<Post>();
  @Output() edit = new EventEmitter<Post>();

  onEdit(post) {
    this.edit.emit(post);
  }

  onDelete(post) {
    this.deleted.emit(post);
  }

}
