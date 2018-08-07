import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromAuthentication from '../../shared/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'authentication-logout',
  template: `<p class="h1 text-white">Logging out...</p>`,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
  `],
  host:{'class': 'bg-primary'},
})
export class AuthenticationLogoutComponent implements OnInit {

  constructor(private store: Store<fromAuthentication.State>) { }

  ngOnInit() {
    this.store.dispatch(new fromAuthentication.Logout());
  }

}
