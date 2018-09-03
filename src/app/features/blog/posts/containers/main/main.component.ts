import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute,
    private store: Store<fromPosts.State>
  ) {}

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        console.log('fragment',fragment);
        document.querySelector('#' + fragment).scrollIntoView({ behavior: 'smooth' })
      }
    })
  }

}
