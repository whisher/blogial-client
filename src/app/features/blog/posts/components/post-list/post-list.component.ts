import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Post } from '../../../../../shared/features/posts/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-posts-post-list',
  templateUrl: './post-list.component.html',
  host:{
    class: 'd-block my-3'
  }
})
export class BlogPostsPostListComponent {
 @Input() posts: Post[];
 @Input() hasPosts: boolean;
 constructor(){
   console.log('blog posts list',this.posts);
 }
 }
