import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Store, select } from '@ngrx/store';

import * as fromPosts from '../../../../../core/posts/store';
import { Post } from '../../../../../core/posts/models';

@Component({
  selector: 'blog-home-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class BlogHomeMainComponent implements OnInit {
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
