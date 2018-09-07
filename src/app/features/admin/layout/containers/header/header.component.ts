import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Account } from '../../../../../shared/features/authentication/models';
import * as fromAuthentication from '../../../../../shared/features/authentication/store';

@Component({
  selector: 'admin-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AdminLayoutHeaderComponent implements OnInit, OnDestroy{
  account$ = this.store.pipe(select(fromAuthentication.getAccount));
  account: Account;
  subscription: Subscription;
  constructor(
    private router: Router,
    private store: Store<fromAuthentication.State>
  ) {}

  onLogout(){
    this.router.navigateByUrl('/auth/logout');
  }

  ngOnInit() {
    this.subscription = this.account$
    .subscribe(account => {
      this.account = account;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
