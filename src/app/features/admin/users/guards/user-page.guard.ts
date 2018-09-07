import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { AdminUsersUserPageComponent } from '../containers/user-page/user-page.component';

@Injectable()
export class UserPageGuard implements CanDeactivate<AdminUsersUserPageComponent> {
  canDeactivate(component: AdminUsersUserPageComponent) {
    if (!component.isFormPristine) {
      return window.confirm('Are you sure you want to leave?');
    }
    return true;
  }
}
