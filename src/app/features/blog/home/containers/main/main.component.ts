import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import * as fromPosts from '../../../../../core/posts/store';
import { Post } from '../../../../../core/posts/models';

@Component({
  selector: 'blog-home-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class BlogHomeMainComponent {
  posts$ = this.store.pipe(select(fromPosts.getPostsEntities));
  loaded$ = this.store.pipe(select(fromPosts.getPostsLoaded));
  hasPosts$ = this.store.pipe(select(fromPosts.getHasPosts));

  constructor(
    private router: Router,
    private store: Store<fromPosts.State>
  ) {}

  onGotoPosts() {
    this.router.navigate(['/home'], { fragment: 'content' });
  }

}
