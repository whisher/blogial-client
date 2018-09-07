// Core
import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

// Ngrx
import { Store, select } from '@ngrx/store';

// Ng-Bootstrap
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

// Modals
import { AdminUsersUserDeleteComponent } from '../../modals';

// Store
import { User } from '../../../../../shared/features/users/models';
import * as fromUsers from '../../../../../shared/features/users/store';

@Component({
  selector: 'admin-users-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminUsersMainComponent {
  users$ = this.store.pipe(select(fromUsers.getUsersFilterEntities))
  loaded$ = this.store.pipe(select(fromUsers.getUsersLoaded));
  hasUsers$ = this.store.pipe(select(fromUsers.getHasUsers));

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private store: Store<fromUsers.State>
  ) {}

  onEdit(user) {
    this.router.navigate(['/admin/users/user', user._id]);
  }

  onDelete(user) {
    const modalRef = this.modalService.open(AdminUsersUserDeleteComponent, {
      backdropClass: 'backdrop-danger',
      ariaLabelledBy: 'modal-post-delete',
      centered: true
    })
    modalRef.componentInstance.user = user;
    modalRef.result.then((result) => {
      if(result){
        const id = user._id;
        this.store.dispatch(new fromUsers.DeleteUser({id}));
      }
    }, (reason) => {});
  }


}
