import { Action } from '@ngrx/store';

import { Account } from '../../models';
import {
  AccountActions,
  AccountActionTypes
} from '../actions';


export interface State {
  account: Account | null,
  isLoaded: boolean,
  isLoading: boolean
}

export const initialState: State = {
  account: null,
  isLoaded: false,
  isLoading: false
};


export function reducer(state = initialState, action: AccountActions): State {
  switch (action.type) {
    case AccountActionTypes.AccountFailure: {
      return {
        ...state,
        account: null,
        isLoaded: false,
        isLoading: false
      };
    }
    case AccountActionTypes.AccountRequested: {
      return {
        ...state,
        account: null,
        isLoaded: false,
        isLoading: true
      };
    }
    case AccountActionTypes.AccountSuccess: {
      return {
        ...state,
        account: action.payload.account,
        isLoaded: true,
        isLoading: false
      };
    }
    case AccountActionTypes.AccountUpdate: {
      const current = state.account;
      const payload = action.payload.account;
      const account = (current._id===payload._id) ? payload : current;
      console.log(account);
      return {
        ...state,
        account
      };
    }
    default: {
      return state;
    }
  }
}

export const getAccount = (state: State) => state.account;
