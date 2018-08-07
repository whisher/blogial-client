import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Account } from '../../../../authentication/models/authentication.model';

@Component({
  selector: 'admin-layout-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class AdminLayoutBarComponent implements OnInit {
  @Input() account: Account;
  @Output() logout = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('account',this.account);
  }

  onLogout() {
    this.logout.emit();
  }
}
