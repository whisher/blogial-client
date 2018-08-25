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
} from '../../models';
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
  Logout,
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
  accountSuccess$ = this.actions$.pipe(
      ofType(AccountActionTypes.AccountSuccess),
      map(() => new RouterActions.Go({ path: ['/admin'] }))
    );
  @Effect()
    accountFailure$ = this.actions$.pipe(
      ofType(AccountActionTypes.AccountFailure),
      map(() => new Logout())
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
    map((token: AuthenticationToken) => new AccountRequested())
  );

  @Effect()
  loginRedirect$ = this.actions$.pipe(
    ofType(
      AuthenticationActionTypes.LoginRedirect,
      AuthenticationActionTypes.Logout,
      AccountActionTypes.AccountFailure
    ),
    map(authed => new RouterActions.Go({ path: ['/auth'] }))
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
