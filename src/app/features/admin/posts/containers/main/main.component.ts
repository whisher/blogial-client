import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';

import { AdminPostsPostDeleteComponent } from '../../modals';
import * as fromPosts from '../../../../../shared/features/posts/store';
import { Post } from '../../../../../shared/features/posts/models';

@Component({
  selector: 'admin-posts-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminPostsMainComponent implements OnDestroy{
  posts$ = this.store.pipe(select(fromPosts.getPostsEntities))
  loaded$ = this.store.pipe(select(fromPosts.getPostsLoaded));
  hasPosts$ = this.store.pipe(select(fromPosts.getHasPosts));
  subscriptions : Array<Subscription>
  frm: FormGroup
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private store: Store<fromPosts.State>
  ) {}
  public ;



  ngOnInit() {
    this.frm = this.formBuilder.group({
      status: 'all',
      search: null
    });

    const statusSubscription = this.frm.get('status').valueChanges.subscribe(
      status => {
        this.store.dispatch(new fromPosts.FilterPostsByStatus({status}))
      }
    );

    const titleSubscription = this.frm.get('search').valueChanges.subscribe(
      search => {
        this.store.dispatch(new fromPosts.FilterPostsByTitle({search}))
      }
    );

    this.subscriptions = [statusSubscription, titleSubscription];
  }
  
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

  ngOnDestroy(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }
}
