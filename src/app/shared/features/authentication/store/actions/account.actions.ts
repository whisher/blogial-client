import { Action } from '@ngrx/store';
import { Account } from '../../models';

export enum AccountActionTypes {
  AccountFailure = '[Account] Failure',
  AccountRequested = '[Account] Requested',
  AccountSuccess = '[Account] Success',
}

export class AccountFailure implements Action {
  readonly type = AccountActionTypes.AccountFailure;
  constructor(public payload: any) { }
}

export class AccountRequested implements Action {
  readonly type = AccountActionTypes.AccountRequested;
}

export class AccountSuccess implements Action {
  readonly type = AccountActionTypes.AccountSuccess;
  constructor(public payload: { account: Account }) { }
}


export type AccountActions =
  | AccountFailure
  | AccountRequested
  | AccountSuccess;
