import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';

import * as fromAuthentication from '../../../../authentication/shared/store';

@Component({
  selector: 'admin-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AdminLayoutHeaderComponent {
  account$ = this.store.pipe(select(fromAuthentication.getAccount));
  constructor(
    private router: Router,
    private store: Store<fromAuthentication.State>
  ) {}
  onLogout(){
    this.router.navigateByUrl('/auth/logout');
  }
}
