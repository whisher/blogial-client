import { Component, Output, Input, EventEmitter } from '@angular/core';

import { Account } from '../../../../authentication/models';

@Component({
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