import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromPosts from '../../shared/store';
import { Post } from '../../models';

@Component({
  selector: 'admin-posts-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminPostsMainComponent implements OnInit {
  posts$ = this.store.pipe(select(fromPosts.getPostsEntities));
  constructor(private store: Store<fromPosts.State>) { }
  ngOnInit() {}

}
