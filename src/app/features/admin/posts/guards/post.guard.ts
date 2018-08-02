import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { AdminPostsPostPageComponent } from '../containers/post-page/post-page.component';

@Injectable()
export class PostPageGuard implements CanDeactivate<AdminPostsPostPageComponent> {
  canDeactivate(component: AdminPostsPostPageComponent) {
    if (!component.isFormPristine) {
      return window.confirm('Are you sure you want to leave?');
    }
    return true;
  }
}
