import { Component, OnInit } from '@angular/core';

import { Authenticate } from '../../models/authentication';

@Component({
  selector: 'iwdf-authentication-login-page',
  template: `
    <iwdf-authentication-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$"
      [errorMessage]="error$">
    </iwdf-authentication-login-form>
  `,
  styles: [],
})
export class AuthenticationLoginPageComponent implements OnInit {
  pending$ = false;
  error$ = null;
  constructor() { }

  ngOnInit() {
  }
  onSubmit($event: Authenticate) {
    console.log($event);
  }
}
