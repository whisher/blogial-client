import { Action } from '@ngrx/store';
import { Authenticate, AuthenticationToken } from '../../../models/authentication.model';

export enum AuthenticationActionTypes {
  Login = '[Login] Action',
  LoginFailure = '[Auth] Login Failure',
  Logout = '[Auth] Logout',
  LoginRedirect = '[Auth] Login Redirect',
  LoginSuccess = '[Auth] Login Success',
}

export class Login implements Action {
  readonly type = AuthenticationActionTypes.Login;
  constructor(public payload: Authenticate) {}
}

export class LoginFailure implements Action {
  readonly type = AuthenticationActionTypes.LoginFailure;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthenticationActionTypes.Logout;
}

export class LoginRedirect implements Action {
  readonly type = AuthenticationActionTypes.LoginRedirect;
}

export class LoginSuccess implements Action {
  readonly type = AuthenticationActionTypes.LoginSuccess;
  constructor(public payload: { token: AuthenticationToken }) {}
}

export type AuthenticationActions =
  | Login
  | LoginFailure
  | Logout
  | LoginRedirect
  | LoginSuccess;
