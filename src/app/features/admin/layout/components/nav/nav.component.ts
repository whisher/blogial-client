import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Account } from '../../../../../shared/features/authentication/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class AdminLayoutNavComponent {
  @Input() account: Account;
}
