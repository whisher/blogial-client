import { Component, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter } from '@angular/core';

import { Post } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'admin-posts-post-item',
  templateUrl: './post-item.component.html',
  host:{
    class:'row--list border-bottom py-1'
  }
})
export class AdminPostsPostItemComponent {
  @Input() post: Post;
  @Output() deleted = new EventEmitter<Post>();
  @Output() edit = new EventEmitter<Post>();

  onEdit() {
    this.edit.emit(this.post)
  }

  onDelete() {
    this.deleted.emit(this.post);
  }
}
