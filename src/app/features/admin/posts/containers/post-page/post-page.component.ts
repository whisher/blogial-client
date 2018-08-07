import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { Post } from '../../models/post.model';

@Component({
  selector: 'admin-posts-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class AdminPostsPostPageComponent implements OnInit {
  pending$ = null;
  error$ = null;
  isFormPristine = true;
  post$: Observable<Post>;
  constructor() { }

  ngOnInit() {}

  onIsPristine($event){
    this.isFormPristine = $event;
  }

  onSubmit($event: Post) {
    console.log($event);
  }

}
