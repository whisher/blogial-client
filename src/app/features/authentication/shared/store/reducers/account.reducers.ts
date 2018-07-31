import { Action } from '@ngrx/store';

import { Account } from '../../../models/authentication.model';
import {
  AccountActions,
  AccountActionTypes
} from '../actions';


export interface State {
  account: Account | null,
  isLoading: boolean
}

export const initialState: State = {
  account: null,
  isLoading: false
};


export function reducer(state = initialState, action: AccountActions): State {
  switch (action.type) {
    case AccountActionTypes.AccountFailure: {
      return {
        ...state,
        account: null,
        isLoading: false
      };
    }
    case AccountActionTypes.AccountRequested: {
      return {
        ...state,
        account: null,
        isLoading: true
      };
    }
    case AccountActionTypes.AccountSuccess: {
      return {
        ...state,
        account: action.payload.account,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}

export const getAccount = (state: State) => state.account;
