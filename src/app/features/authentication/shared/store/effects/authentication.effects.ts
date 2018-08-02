import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, exhaustMap, catchError, mergeMap, switchMap } from 'rxjs/operators';

import * as RouterActions from '../../../../../store';
import {
  Account,
  Authenticate,
  AuthenticationToken,
} from '../../../models/authentication.model';
import {
  AuthenticationService
} from '../../services/authentication.service';
import {
  AccountFailure,
  AccountRequested,
  AccountSuccess,
  AccountActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
  AuthenticationActionTypes
} from '../actions';



@Injectable()
export class AuthenticationEffects {

  @Effect()
  account$ = this.actions$
    .pipe(
      ofType(AccountActionTypes.AccountRequested),
      switchMap(() => {
        return this.authenticationService.account()
          .pipe(
            map((account: Account) => new AccountSuccess({ account })),
            catchError(error => of(new AccountFailure(error)))
          )
      })
    );
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
    mergeMap((token: AuthenticationToken) => {
      return [
        new AccountRequested(),
        new RouterActions.Go({ path: ['/admin'] })
      ]
    }),
    catchError(error => of(new AccountFailure(error)))
  );

  @Effect()
  loginRedirect$ = this.actions$.pipe(
    ofType(
      AuthenticationActionTypes.LoginRedirect,
      AuthenticationActionTypes.Logout,
      AccountActionTypes.AccountFailure
    ),
    map(authed => new RouterActions.Go({ path: ['/auth/login'] }))
  );

  @Effect()
  loginJustLogged$ = this.actions$.pipe(
    ofType(
      AuthenticationActionTypes.LoginJustLogged
    ),
    map(authed => new RouterActions.Go({ path: ['/admin'] }))
  );

  constructor(
    private router: Router,
    private actions$: Actions,
    private authenticationService: AuthenticationService
  ) { }


}
