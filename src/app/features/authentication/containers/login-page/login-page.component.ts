import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Authenticate } from '../../models/authentication.model';
import * as fromAuthentication from '../../shared/store/reducers';
import * as Authentication from '../../shared/store/actions';

@Component({
  selector: 'authentication-login-page',
  template: `
    <authentication-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </authentication-login-form>
    <div class="mt-3">
      <a routerLink="">
      <iwdf-icon-arrowleft></iwdf-icon-arrowleft>  Back to blogial
      </a>
    </div>
  `,
  styles: [],
})
export class AuthenticationLoginPageComponent {
  pending$ = this.store.pipe(select(fromAuthentication.getLoginPagePending));
  error$ = this.store.pipe(select(fromAuthentication.getLoginPageError));

  constructor(private store: Store<fromAuthentication.State>) {}

  onSubmit($event: Authenticate) {
    this.store.dispatch(new Authentication.Login($event));
  }
}
