import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Post } from '../../models/post.model';
import { PostsService } from '../../shared/services';

@Component({
  selector: 'admin-posts-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminPostsMainComponent implements OnInit {
  posts$: Observable<Post[]>;
  constructor(private service: PostsService) { }

  ngOnInit() {
    this.posts$ = this.service.find().pipe(pluck('posts'));

  }

}
