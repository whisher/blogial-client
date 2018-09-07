import { Action } from '@ngrx/store';
import { Account } from '../../models';

export enum AccountActionTypes {
  AccountFailure = '[Account] Failure',
  AccountNoop = '[Account] Noop',
  AccountRequested = '[Account] Requested',
  AccountSuccess = '[Account] Success',
  AccountUpdate = '[Account] Update',
}

export class AccountFailure implements Action {
  readonly type = AccountActionTypes.AccountFailure;
  constructor(public payload: any) { }
}

export class AccountNoop implements Action {
  readonly type = AccountActionTypes.AccountNoop;
  constructor() { }
}

export class AccountRequested implements Action {
  readonly type = AccountActionTypes.AccountRequested;
}

export class AccountSuccess implements Action {
  readonly type = AccountActionTypes.AccountSuccess;
  constructor(public payload: { account: Account }) { }
}

export class AccountUpdate implements Action {
  readonly type = AccountActionTypes.AccountUpdate;
  constructor(public payload: { account: Account }) { }
}

export type AccountActions =
  | AccountFailure
  | AccountNoop
  | AccountRequested
  | AccountSuccess
  | AccountUpdate;
