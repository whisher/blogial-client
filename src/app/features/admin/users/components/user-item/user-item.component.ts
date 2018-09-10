import { Component, Input, Output, ChangeDetectionStrategy, ViewEncapsulation, EventEmitter } from '@angular/core';

import { User } from '../../../../../core/users/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'admin-users-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
  host:{
    class:'row--list border-bottom py-1'
  }
})
export class AdminUsersUserItemComponent {
  @Input() user: User;
  @Output() deleted = new EventEmitter<User>();
  @Output() edit = new EventEmitter<User>();

  onEdit() {
    this.edit.emit(this.user)
  }

  onDelete() {
    this.deleted.emit(this.user);
  }
}
