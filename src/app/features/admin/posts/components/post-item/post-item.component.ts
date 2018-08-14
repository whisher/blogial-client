import { Component, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter } from '@angular/core';

// Ng Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Post } from '../../models';
import { AdminPostsPostDeleteComponent } from '../../modals';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'admin-posts-post-item',
  templateUrl: './post-item.component.html',
  host:{
    class:'row--list border-bottom py-1'
  }
})
export class AdminPostsPostItemComponent {
  @Input() post: Post;
  @Output() deleted = new EventEmitter<Post>();

  constructor(
    private modalService: NgbModal
  ) {}

  open() {
    const modalRef = this.modalService.open(AdminPostsPostDeleteComponent, {
      backdropClass: 'backdrop-danger',
      ariaLabelledBy: 'modal-post-delete',
      centered: true
    })
    modalRef.componentInstance.post = this.post;
    modalRef.result.then((result) => {
      if(result){
        this.deleted.emit(this.post)
      }
    }, (reason) => {});
  }
}
