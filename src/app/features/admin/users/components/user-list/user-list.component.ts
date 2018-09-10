import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { User } from '../../../../../core/users/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-users-user-list',
  templateUrl: './user-list.component.html',
  host:{
    class: 'd-block my-3'
  }
})
export class AdminUsersUserListComponent {
  @Input() users: User[];
  @Input() hasUsers: boolean;
  @Output() deleted = new EventEmitter<User>();
  @Output() edit = new EventEmitter<User>();

  onEdit(user) {
    this.edit.emit(user);
  }

  onDelete(user) {
    this.deleted.emit(user);
  }

  descOrder(a, b){
    if(b.value.created > a.value.created) {
      return a.value.created;
    }
  }

}
