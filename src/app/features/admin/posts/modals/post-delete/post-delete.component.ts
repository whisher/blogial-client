import {Component, Input} from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Post } from '../../../../../shared/features/posts/models';

@Component({
  selector: 'admin-posts-post-delete',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-basic-title">
        Do you want really delete the post?
      </h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.close(false)">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div class="alert alert-light p-0 m-0" role="alert">
       {{post.title}}
      </div>
    </div>
    <div class="modal-footer">
      <ul class="d-flex flex-row justify-content-end">
        <li class="pr-1">
          <button type="button" class="btn btn-secondary" (click)="activeModal.close(false)">No</button>
        </li>
        <li>
          <button type="button" class="btn btn-danger" (click)="activeModal.close(true)">Yes</button>
        </li>
      </ul>
    </div>
  `
})
export class AdminPostsPostDeleteComponent {
  @Input() post: Post;

  constructor(public activeModal: NgbActiveModal) {}
}
