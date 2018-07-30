import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import {Actions, Effect, ofType} from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';

import * as RouterActions from '../../../../../store';
import {
  Authenticate,
  AuthenticationToken } from '../../../models/authentication.model';
import {
  AuthenticationService
} from '../../services/authentication.service';
import {
  Login,
  LoginSuccess,
  LoginFailure,
  AuthenticationActionTypes
} from '../actions';



@Injectable()
export class AuthenticationEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType(AuthenticationActionTypes.Login),
    map((action: Login) => action.payload),
    exhaustMap((credentials: Authenticate) =>
      this.authenticationService
        .login(credentials)
        .pipe(
          map((token: AuthenticationToken) => new LoginSuccess({ token })),
          catchError(error => of(new LoginFailure(error)))
        )
    )
  );

  @Effect()
  loginSuccess$ = this.actions$.pipe(
    ofType(AuthenticationActionTypes.LoginSuccess),
    map(() => new RouterActions.Go({path: ['/admin']}))
  );

  @Effect()
  loginRedirect$ = this.actions$.pipe(
    ofType(AuthenticationActionTypes.LoginRedirect, AuthenticationActionTypes.Logout),
    map(authed => new RouterActions.Go({path: ['/auth/login']}))
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private authenticationService: AuthenticationService
  ) {}


}
