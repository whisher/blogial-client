import { Component, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter } from '@angular/core';

import { Post } from '../../../../../shared/features/posts/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-post-item',
  templateUrl: './post-item.component.html',
  host:{
    class:''
  }
})
export class BlogPostItemComponent {
  @Input() post: Post;
}
