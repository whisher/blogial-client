import { Component, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { Post } from '../../models';
import * as fromPosts from '../../shared/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'admin-posts-post-item',
  templateUrl: './post-item.component.html'
})
export class AdminPostsPostItemComponent {
  @Input() post: Post;
  @Output() deleted = new EventEmitter<Post>();
  closeResult: string;

  constructor(
    private store: Store<fromPosts.State>,
    private modalService: NgbModal
  ) {}

  open(content, post) {
    const modalRef = this.modalService.open(content, {
      backdropClass: 'danger-backdrop',
      ariaLabelledBy: 'modal-delete-post',
      centered: true
    })

    modalRef.result.then((result) => {
      if(result){
        this.deleted.emit(this.post)
      }
    }, (reason) => {});
  }

}
