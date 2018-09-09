import { Component, ChangeDetectionStrategy, Output, Input, EventEmitter } from '@angular/core';

import { Account } from '../../../../../core/authentication/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class AdminLayoutBarComponent{
  @Input() account: Account;
  @Output() logout = new EventEmitter();
  onLogout() {
    this.logout.emit();
  }
}
