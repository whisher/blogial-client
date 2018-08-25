import { Action } from '@ngrx/store';
import { Authenticate, AuthenticationToken } from '../../models';

export enum AuthenticationActionTypes {
  Login = '[Auth] Login',
  LoginFailure = '[Auth] Login Failure',
  LoginJustLogged = '[Auth] Login Just Logged',
  Logout = '[Auth] Logout',
  LoginRedirect = '[Auth] Login Redirect',
  LoginSuccess = '[Auth] Login Success',
}

export class Login implements Action {
  readonly type = AuthenticationActionTypes.Login;
  constructor(public payload: Authenticate) { }
}

export class LoginFailure implements Action {
  readonly type = AuthenticationActionTypes.LoginFailure;
  constructor(public payload: any) { }
}

export class LoginJustLogged implements Action {
  readonly type = AuthenticationActionTypes.LoginJustLogged;
}

export class Logout implements Action {
  readonly type = AuthenticationActionTypes.Logout;
}

export class LoginRedirect implements Action {
  readonly type = AuthenticationActionTypes.LoginRedirect;
}

export class LoginSuccess implements Action {
  readonly type = AuthenticationActionTypes.LoginSuccess;
  constructor(public payload: { token: AuthenticationToken }) { }
}

export type AuthenticationActions =
  | Login
  | LoginFailure
  | LoginJustLogged
  | Logout
  | LoginRedirect
  | LoginSuccess;
