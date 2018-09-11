import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

import { ConfirmService, IsPristineAware} from './confirm.component';

@Injectable()
export class IsPristineGuard implements CanDeactivate<IsPristineAware> {
  constructor(private confirmService: ConfirmService) {}
  canDeactivate(component: IsPristineAware): Promise<boolean> {
    if (!component.isPristine()) {
      return this.confirmService.confirm({ title:'Confirm', message: 'Are you sure you want to leave?' });
    }
    return Promise.resolve(true);
  }
}
