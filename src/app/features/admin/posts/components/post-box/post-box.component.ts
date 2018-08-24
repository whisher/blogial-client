import { Component, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter } from '@angular/core';

import { Post } from '../../models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-posts-post-box',
  templateUrl: './post-box.component.html'
})
export class AdminPostsPostBoxComponent {
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
