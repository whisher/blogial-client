import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError, mergeMap } from 'rxjs/operators';

import { User } from '../../models';
import * as RouterActions from '../../../../../store';
import * as usersActions from '../actions';
import * as authenticationActions from '../../../../../core/authentication/store/actions';
import * as fromServices from '../../services';

@Injectable()
export class UsersEffects {
  constructor(
    private actions$: Actions,
    private service: fromServices.UsersService
  ) {}

  @Effect()
  loadUsers$ = this.actions$.ofType(usersActions.UsersActionTypes.LoadUsers).pipe(
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
  addUser$ = this.actions$.ofType(usersActions.UsersActionTypes.AddUser)
  .pipe(
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
    .ofType(usersActions.UsersActionTypes.AddUserSuccess)
    .pipe(
      map((action: usersActions.AddUserSuccess) => action.payload.user),
      map((user: User) => new RouterActions.Go({path: ['/admin/users']}))
    );

  @Effect()
  updateUser$ = this.actions$.ofType(usersActions.UsersActionTypes.UpdateUser)
  .pipe(
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
  deleteUser$ = this.actions$.ofType(usersActions.UsersActionTypes.DeleteUser)
  .pipe(
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
    .ofType(usersActions.UsersActionTypes.UpdateUserSuccess)
    .pipe(
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
      .ofType(usersActions.UsersActionTypes.DeleteUserSuccess)
      .pipe(
        map((user: User) => {
          return new RouterActions.Go({
            path: ['/admin/users'],
          });
        })
      );
}

/*

*/
