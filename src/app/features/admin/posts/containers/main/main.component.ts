import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';

@Component({
  selector: 'admin-posts-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminPostsMainComponent implements OnInit {
  posts$:Observable<Post[]>; 
  constructor() { }

  ngOnInit() {}

}
