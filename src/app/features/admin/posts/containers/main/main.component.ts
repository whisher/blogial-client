import { Component} from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromPosts from '../../shared/store';
import { Post } from '../../models';

@Component({
  selector: 'admin-posts-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminPostsMainComponent {
  posts$ = this.store.pipe(select(fromPosts.getPostsEntities));

  constructor(private store: Store<fromPosts.State>) { }
  onDelete(post){
    const id = post._id;
    this.store.dispatch(new fromPosts.DeletePost({id}));
  }
}
