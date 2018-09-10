import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { ConfirmService } from '../../../../shared/ui/confirm/confirm.component';
import { AdminUsersUserPageComponent } from '../containers/user-page/user-page.component';

@Injectable()
export class UserPageGuard implements CanDeactivate<AdminUsersUserPageComponent> {
  constructor(private confirmService: ConfirmService) {}
  canDeactivate(component: AdminUsersUserPageComponent): Promise<boolean> {
    if (!component.isFormPristine) {
      return this.confirmService.confirm({ title:'Confirm', message: 'Are you sure you want to leave?' });
    }
    return Promise.resolve(true);
  }
}
