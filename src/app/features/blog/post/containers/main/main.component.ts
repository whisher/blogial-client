import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromPosts from '../../../../../shared/features/posts/store';
import { Post } from '../../../../../shared/features/posts/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-post-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class BlogPostMainComponent {
  post$ = this.store.pipe(select(fromPosts.getSelectedPostBySlug));
  loaded$ = this.store.pipe(select(fromPosts.getPostsLoaded));
  constructor(
    private store: Store<fromPosts.State>
  ) {}
}
