import { AuthenticationActionTypes, AuthenticationActions } from './../actions';

export interface State {
  error: string | null;
  pending: boolean;
}

export const initialState: State = {
  error: null,
  pending: false,
};

export function reducer(state = initialState, action: AuthenticationActions): State {
  switch (action.type) {
    case AuthenticationActionTypes.Login: {
      return {
        ...state,
        error: null,
        pending: true,
      };
    }

    case AuthenticationActionTypes.LoginSuccess: {
      return {
        ...state,
        error: null,
        pending: false,
      };
    }

    case AuthenticationActionTypes.LoginFailure: {
      return {
        ...state,
        error: action.payload,
        pending: false,
      };
    }

    default: {
      return state;
    }
  }
}

export const getError = (state: State) => state.error;
export const getPending = (state: State) => state.pending;
