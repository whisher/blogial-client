import { Component, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter } from '@angular/core';

import { Post } from '../../../../../shared/features/posts/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'blog-home-post-item',
  templateUrl: './post-item.component.html',
  host:{
    class:''
  }
})
export class BlogHomePostItemComponent {
  @Input() post: Post;
}
