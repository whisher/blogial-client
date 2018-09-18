// Core
import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

// Rxjs
import { Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  switchMap,
  tap
} from 'rxjs/operators';

// Ngrx
import { Store, select } from '@ngrx/store';

// Ng-bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Modals
import { AdminPostsPostDeleteComponent } from '../../modals';

// Store
import { Post } from '../../../../../core/posts/models';
import * as fromPosts from '../../../../../core/posts/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-posts-main',
  templateUrl: './main.component.html',
  styles: ['.input-group-text { font-weight: normal; }']
})
export class AdminPostsMainComponent implements OnDestroy {
  posts$ = this.store.pipe(select(fromPosts.getPostsEntities))
  loaded$ = this.store.pipe(select(fromPosts.getPostsLoaded));
  hasPosts$ = this.store.pipe(select(fromPosts.getHasPosts));
  subscriptions : Array<Subscription>;
  frm: FormGroup;
  showTimes = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private store: Store<fromPosts.State>
  ) {}

  ngOnInit() {
    this.frm = this.formBuilder.group({
      status: 'all',
      search: ''
    });

    const statusSubscription = this.frm.get('status')
    .valueChanges.subscribe(
      status => {
        this.store.dispatch(new fromPosts.FilterPostsByStatus({status}))
      }
    );

    const titleSubscription = this.frm.get('search')
    .valueChanges.
    pipe(
      tap(search => this.showTimes = search.length > 0),
      debounceTime(500),
      distinctUntilChanged()
    )
    .subscribe(
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

  onResetSearch(){
    this.showTimes = false;
    this.frm.patchValue({search: ''});
  }
  ngOnDestroy(){
    this.subscriptions.forEach(subscription => subscription.unsubscribe())
  }
}
