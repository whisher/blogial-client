// Core
import { Component } from '@angular/core';

// Ngrx
import { Store, select } from '@ngrx/store';

// Store
import { User } from '../../../../../shared/features/users/models';
import * as fromUsers from '../../../../../shared/features/users/store';

@Component({
  selector: 'admin-users-user-page',
  template: `
    <admin-users-user-form
    (submitted)="onSubmit($event)"
    (isPristine)="onIsPristine($event)"
    [pending]="pending$ | async"
    [error]="error$ | async"
    [selectedUser]="selectedUser$ | async"></admin-users-user-form>
  `
})
export class AdminUsersUserPageComponent {

  pending$ = this.store.pipe(select(fromUsers.getUsersLoading));
  error$ = this.store.pipe(select(fromUsers.getUsersError));
  selectedUser$ = this.store.pipe(select(fromUsers.getSelectedUser));
  isFormPristine = true;

  constructor(private store: Store<fromUsers.State>) { }

  onIsPristine($event){
    this.isFormPristine = $event;
  }

  onSubmit($event: User) {
    const user = $event;
    if(user._id){
      this.store.dispatch(new fromUsers.UpdateUser({user}))
    }
    else {
      delete user._id;
      this.store.dispatch(new fromUsers.AddUser({user}))
    }
  }

}
