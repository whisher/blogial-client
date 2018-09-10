import { Injectable } from '@angular/core';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';

import { User } from '../../models';
import * as RouterActions from '../../../../store';
import * as usersActions from '../actions';
import * as authenticationActions from '../../../../core/authentication/store/actions';
import * as fromServices from '../../services';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private service: fromServices.UsersService
  ) {}

  @Effect()
  loadUsers$ = this.actions$
    .pipe(
      ofType(usersActions.UsersActionTypes.LoadUsers),
      switchMap(() => {
        return this.service
          .load()
          .pipe(
            map(users => new usersActions.LoadUsersSuccess({users})),
            catchError(error => of(new usersActions.LoadUsersFail(error)))
          );
      })
    );

  @Effect()
  addUser$ = this.actions$
    .pipe(
      ofType(usersActions.UsersActionTypes.AddUser),
      map((action: usersActions.AddUser) => action.payload.user),
      switchMap((user: User) => {
        return this.service
          .add(user)
          .pipe(
            map((user: User) => new usersActions.AddUserSuccess({user})),
            catchError(error => of(new usersActions.AddUserFail(error)))
          );
      })
    );

  @Effect()
  addUserSuccess$ = this.actions$
    .pipe(
      ofType(usersActions.UsersActionTypes.AddUserSuccess),
      map((action: usersActions.AddUserSuccess) => action.payload.user),
      map((user: User) => new RouterActions.Go({path: ['/admin/users']}))
    );

  @Effect()
  updateUser$ = this.actions$
  .pipe(
    ofType(usersActions.UsersActionTypes.UpdateUser),
    map((action: usersActions.UpdateUser) => action.payload.user),
    switchMap((user: User) => {
      return this.service
        .update(user._id, user)
        .pipe(
          map(user => new usersActions.UpdateUserSuccess({user})),
          catchError(error => of(new usersActions.UpdateUserFail(error)))
        );
    })
  );

  @Effect()
  deleteUser$ = this.actions$
    .pipe(
      ofType(usersActions.UsersActionTypes.DeleteUser),
      map((action: usersActions.DeleteUser) => action.payload.id),
      switchMap(id => {
        return this.service
          .delete(id)
          .pipe(
            map(id => new usersActions.DeleteUserSuccess({id})),
            catchError(error => of(new usersActions.DeleteUserFail(error)))
          );
      })
    );

  @Effect()
  updateUsersSuccess$ = this.actions$
    .pipe(
      ofType(usersActions.UsersActionTypes.UpdateUserSuccess),
      map((action: usersActions.UpdateUserSuccess) => action.payload.user),
      mergeMap((user: any) => {
       return [
          new authenticationActions.AccountUpdate({account:user}),
          new RouterActions.Go({path: ['/admin/users']})
        ]
      })
    );

  @Effect()
  deleteUsersSuccess$ = this.actions$
    .pipe(
      ofType(usersActions.UsersActionTypes.DeleteUserSuccess),
      map((user: User) => {
        return new RouterActions.Go({
          path: ['/admin/users'],
        });
      })
    );
}
