import { Action } from '@ngrx/store';
import { Account } from '../../../models/authentication.model';

export enum AccountActionTypes {
  AccountFailure = '[Account] Account Failure',
  AccountRequested = '[Account] Account Requested',
  AccountSuccess = '[Account] Account Success',
}

export class AccountFailure implements Action {
  readonly type = AccountActionTypes.AccountFailure;
  constructor(public payload: any) {}
}

export class AccountRequested implements Action {
  readonly type = AccountActionTypes.AccountRequested;
}

export class AccountSuccess implements Action {
  readonly type = AccountActionTypes.AccountSuccess;
  constructor(public payload: { account:Account}) {}
}


export type AccountActions =
  | AccountFailure
  | AccountRequested
  | AccountSuccess;
