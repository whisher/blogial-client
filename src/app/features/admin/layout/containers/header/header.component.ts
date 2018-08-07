import { Component } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromAuthentication from '../../../../authentication/shared/store';

@Component({
  selector: 'admin-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AdminLayoutHeaderComponent {
  account$ = this.store.pipe(select(fromAuthentication.getAccount));
  constructor(private store: Store<fromAuthentication.State>) {}
  onLogout(){
    this.store.dispatch(new fromAuthentication.Logout());
  }
}
