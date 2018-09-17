import { Action } from '@ngrx/store';

import { User } from '../../models';

export enum UsersActionTypes {
  LoadUsers = '[Users] Load Users',
  LoadUsersSuccess = '[Users] Load Users Success',
  LoadUsersFail = '[Users] Load Users Fail',
  LoadUser = '[Users] Load User',
  LoadUserSuccess = '[Users] Load User Success',
  LoadUserFail = '[Users] Load User Fail',
  AddUser = '[Users] Add User',
  AddUserSuccess = '[Users] Add User Success',
  AddUserFail = '[Users] Add User Fail',
  UpdateUser = '[Users] Update User',
  UpdateUserSuccess = '[Users] Update User Success',
  UpdateUserFail = '[Users] Update User Fail',
  DeleteUser = '[Users] Delete User',
  DeleteUserSuccess = '[Users] Delete User Success',
  DeleteUserFail = '[Users] Delete Post Fail',
  FilterUsersByRole = '[Users] Filter Users By Role',
  FilterUsersByName = '[Users] Filter Users By Name'
}

export class LoadUsers implements Action {
  readonly type = UsersActionTypes.LoadUsers;
}

export class LoadUsersFail implements Action {
  readonly type = UsersActionTypes.LoadUsersFail;

  constructor(public payload: any) {}
}

export class LoadUsersSuccess implements Action {
  readonly type = UsersActionTypes.LoadUsersSuccess;

  constructor(public payload: { users: User[] }) {}
}

export class AddUser implements Action {
  readonly type = UsersActionTypes.AddUser;

  constructor(public payload: { user: User }) {}
}

export class AddUserFail implements Action {
  readonly type = UsersActionTypes.AddUserFail;

  constructor(public payload: any) {}
}

export class AddUserSuccess implements Action {
  readonly type = UsersActionTypes.AddUserSuccess;

  constructor(public payload: { user: User }) {}
}

export class UpdateUser implements Action {
  readonly type = UsersActionTypes.UpdateUser;

  constructor(public payload: { user: User }) {}
}

export class UpdateUserFail implements Action {
  readonly type = UsersActionTypes.UpdateUserFail;

  constructor(public payload: any) {}
}

export class UpdateUserSuccess implements Action {
  readonly type = UsersActionTypes.UpdateUserSuccess;

  constructor(public payload: { user: User }) {}
}

export class DeleteUser implements Action {
  readonly type = UsersActionTypes.DeleteUser;

  constructor(public payload: { id }) {}
}

export class DeleteUserFail implements Action {
  readonly type = UsersActionTypes.DeleteUserFail;

  constructor(public payload: any) {}
}

export class DeleteUserSuccess implements Action {
  readonly type = UsersActionTypes.DeleteUserSuccess;

  constructor(public payload: { id }) {}
}

export class FilterUsersByRole implements Action {
  readonly type = UsersActionTypes.FilterUsersByRole;

  constructor(public payload: { role: string }) {}
}

export class FilterUsersByName implements Action {
  readonly type = UsersActionTypes.FilterUsersByName;

  constructor(public payload: { search: string }) {}
}

export type UsersActions =
  | LoadUsers
  | LoadUsersFail
  | LoadUsersSuccess
  | AddUser
  | AddUserFail
  | AddUserSuccess
  | UpdateUser
  | UpdateUserFail
  | UpdateUserSuccess
  | DeleteUser
  | DeleteUserFail
  | DeleteUserSuccess
  | FilterUsersByRole
  | FilterUsersByName;
