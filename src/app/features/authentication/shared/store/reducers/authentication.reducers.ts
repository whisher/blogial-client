import { Action } from '@ngrx/store';

import { AuthenticationToken } from '../../../models/authentication.model';
import {
  AuthenticationActions,
  AuthenticationActionTypes
} from '../actions';


export interface State {
  loggedIn: boolean,
  token: AuthenticationToken | null
}

export const initialState: State = {
  loggedIn: false,
  token: null
};


export function reducer(state = initialState, action: AuthenticationActions): State {
  switch (action.type) {
    case AuthenticationActionTypes.LoginSuccess: {
      return {
        ...state,
        loggedIn: true,
        token: action.payload.token
      };
    }

    case AuthenticationActionTypes.Logout: {
      return initialState;
    }

    default: {
      return state;
    }
  }
}

export const getLoggedIn = (state: State) => state.loggedIn;
export const getToken = (state: State) => state.token;
