import { Component} from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';

import { AdminPostsPostDeleteComponent } from '../../modals';
import * as fromPosts from '../../shared/store';
import { Post } from '../../models';

@Component({
  selector: 'admin-posts-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminPostsMainComponent {
  posts$ = this.store.pipe(select(fromPosts.getPostsEntities));
  loaded$ = this.store.pipe(select(fromPosts.getPostsLoaded));
  hasPosts$ = this.store.pipe(select(fromPosts.getHasPosts));

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private store: Store<fromPosts.State>
  ) {}

  onEdit(post) {
    this.router.navigate(['/admin/posts/post', post._id]);
  }
  onDelete(post) {
    const modalRef = this.modalService.open(AdminPostsPostDeleteComponent, {
      backdropClass: 'backdrop-danger',
      ariaLabelledBy: 'modal-post-delete',
      centered: true
    })
    modalRef.componentInstance.post = post;
    modalRef.result.then((result) => {
      if(result){
        const id = post._id;
        this.store.dispatch(new fromPosts.DeletePost({id}));
      }
    }, (reason) => {});
  }
}
