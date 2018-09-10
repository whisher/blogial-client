import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { tap, map, exhaustMap, catchError, mergeMap, switchMap } from 'rxjs/operators';

import {
  Account,
  Authenticate,
  AuthenticationToken,
} from '../../models';
import * as RouterActions from '../../../../store';
import * as authenticationActions from '../actions';
import {
  AuthenticationService
} from '../../services/authentication.service';

@Injectable()
export class AuthenticationEffects {

  @Effect()
  account$ = this.actions$
    .pipe(
      ofType(authenticationActions.AccountActionTypes.AccountRequested),
      switchMap(() => {
        return this.authenticationService.account()
          .pipe(
            map((account: Account) => new authenticationActions.AccountSuccess({ account })),
            catchError(error => of(new authenticationActions.AccountFailure(error)))
          )
      })
    );

  @Effect()
  accountSuccess$ = this.actions$
    .pipe(
      ofType(authenticationActions.AccountActionTypes.AccountSuccess),
      map(() => new authenticationActions.AccountNoop())
    );

  @Effect()
  accountFailure$ = this.actions$
    .pipe(
      ofType(authenticationActions.AccountActionTypes.AccountFailure),
      map(() => new authenticationActions.Logout())
    );

  @Effect()
  login$ = this.actions$
    .pipe(
      ofType(authenticationActions.AuthenticationActionTypes.Login),
      map((action: authenticationActions.Login) => action.payload),
      exhaustMap((credentials: Authenticate) =>{
        return this.authenticationService
          .login(credentials)
          .pipe(
            map((token: AuthenticationToken) => new authenticationActions.LoginSuccess({ token })),
            catchError(error => of(new authenticationActions.LoginFailure(error)))
          )
        }
      )
    );

  @Effect()
  loginSuccess$ = this.actions$
    .pipe(
      ofType(authenticationActions.AuthenticationActionTypes.LoginSuccess),
      mergeMap((token: AuthenticationToken) =>{
        return [
          new authenticationActions.AccountRequested(),
          new RouterActions.Go({ path: ['/admin'] })
        ]
      })
    );

  @Effect()
  loginRedirect$ = this.actions$
    .pipe(
      ofType(
        authenticationActions.AuthenticationActionTypes.LoginRedirect,
        authenticationActions.AuthenticationActionTypes.Logout,
        authenticationActions.AccountActionTypes.AccountFailure
      ),
      map(authed => {
        return new RouterActions.Go({ path: ['/auth'] })
      })
    );

  @Effect()
  loginJustLogged$ = this.actions$
    .pipe(
      ofType(
        authenticationActions.AuthenticationActionTypes.LoginJustLogged
      ),
      map(authed => new RouterActions.Go({ path: ['/admin'] }))
    );

  constructor(
    private router: Router,
    private actions$: Actions,
    private authenticationService: AuthenticationService
  ) {

}


}
