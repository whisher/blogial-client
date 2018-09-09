import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Authenticate } from '../../../../core/authentication/models';
import * as fromAuthentication from '../../../../core/authentication/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'authentication-login-page',
  template: `
    <authentication-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </authentication-login-form>
    <div class="mt-3">
      <a routerLink="">
      <icon-arrowleft></icon-arrowleft>  Back to blogial
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
    this.store.dispatch(new fromAuthentication.Login($event));
  }
}
