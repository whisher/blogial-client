import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { ConfirmService } from '../../../../shared/ui/confirm/confirm.component';
import { AdminPostsPostPageComponent } from '../containers/post-page/post-page.component';

@Injectable()
export class PostPageGuard implements CanDeactivate<AdminPostsPostPageComponent> {
  constructor(private confirmService: ConfirmService) {}
  canDeactivate(component: AdminPostsPostPageComponent): Promise<boolean> {
    if (!component.isFormPristine) {
      return this.confirmService.confirm({ title:'Confirm', message: 'Are you sure you want to leave?' });
    }
    return Promise.resolve(true);
  }
}
