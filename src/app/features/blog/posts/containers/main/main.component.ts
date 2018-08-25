import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromPosts from '../../../../../shared/features/posts/store';
import { Post } from '../../../../../shared/features/posts/models';

@Component({
  selector: 'blog-home-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class BlogPostsMainComponent {
  posts$ = this.store.pipe(select(fromPosts.getPostsEntities));
  loaded$ = this.store.pipe(select(fromPosts.getPostsLoaded));
  hasPosts$ = this.store.pipe(select(fromPosts.getHasPosts));

  constructor(
    private store: Store<fromPosts.State>
  ) {}


}
