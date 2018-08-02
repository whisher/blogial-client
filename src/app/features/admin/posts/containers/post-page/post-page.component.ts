import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

import { Post } from '../../models/post.model';
import { PostsService } from '../../shared/services';

@Component({
  selector: 'admin-posts-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class AdminPostsPostPageComponent implements OnInit {
  pending$ = null;
  error$ = null;
  isFormPristine = true;
  post$: Post;
  _id: any;
  constructor(
    private route: ActivatedRoute,
    private service: PostsService) { }

  ngOnInit() {
    this.post$ = {author:'me',title:'pippo',content:'aghhh '};
    this.route.params.pipe(
      pluck('id')
    ).subscribe((id) => {
      if(id){
        this._id = id;
        //this.post$ = this.service.findById(id).pipe(pluck('post'));
      }
    });
  }

  onIsPristine($event){
    this.isFormPristine = $event;
    console.log('sisiiia',this.isFormPristine);
  }
  onSubmit($event: Post) {
    console.log($event);
    if(this.post$) {
      this.service.update(this._id,$event)
      .subscribe(
        console.log,
        console.error,
        console.info
      )
    }
    else{
      this.service.create($event)
      .subscribe(
        console.log,
        console.error,
        console.info
      )
    }


  }

}
