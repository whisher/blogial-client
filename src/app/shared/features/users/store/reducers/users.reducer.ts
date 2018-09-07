import { UsersActionTypes, UsersActions } from '../actions/users.action';
import { User } from '../../models';

export interface State {
  entities: { [id: string]: User };
  ids: Array<string>;
  error: boolean;
  loaded: boolean;
  loading: boolean;
}

export const initialState: State = {
  entities: {},
  ids: [],
  error: false,
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action:UsersActions
): State {
  switch (action.type) {
    case UsersActionTypes.LoadUsers: {
      return {
        ...state,
        loading: true,
      };
    }

    case UsersActionTypes.LoadUsersSuccess: {
      const users = action.payload.users;

      const entities = users.reduce(
        (entities: { [id: string]: User }, user: User) => {
          return {
            ...entities,
            [user._id]: user
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities,
        ids: Object.keys(entities)
      };
    }

    case UsersActionTypes.LoadUsersFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case UsersActionTypes.AddUser:
    case UsersActionTypes.UpdateUser: {
      return {
        ...state,
        loading: true
      };
    }

    case UsersActionTypes.AddUserFail:
    case UsersActionTypes.UpdateUserFail:
    case UsersActionTypes.DeleteUserFail: {
      return {
        ...state,
        error: true,
        loading: false
      };
    }

    case UsersActionTypes.AddUserSuccess:
    case UsersActionTypes.UpdateUserSuccess: {
      const user = action.payload.user;
      const entities = {
        ...state.entities,
        [user._id]: user
      };

      return {
        ...state,
        entities,
        ids: Object.keys(entities),
        error: false,
        loading: false
      };
    }

    case UsersActionTypes.DeleteUserSuccess: {
      const id = action.payload.id;
      const { [id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
        ids: Object.keys(entities),
        error: false,
        loading: false
      };
    }

    case UsersActionTypes.FilterUsersByRole: {
      const role = action.payload.role;
      const entities = { ...state.entities};
      const ids = Object.keys(entities).filter(id => {
        // TODO
        return true;
      });
      return {
        ...state,
        ids,
        error: false,
        loading: false
      };
    }

    case UsersActionTypes.FilterUsersByName: {
      const search = action.payload.search;
      const entities = { ...state.entities};
      const ids = Object.keys(entities).filter(id => {
        return entities[id].firstname.indexOf(search) !== -1;
      });
      return {
        ...state,
        ids,
        error: false,
        loading: false
      };
    }
  }

  return state;
}

export const getUsersIds = (state: State) => state.ids;
export const getUsersEntities = (state: State) => state.entities;
export const getUsersError = (state: State) => state.error;
export const getUsersLoading = (state: State) => state.loading;
export const getUsersLoaded = (state: State) => state.loaded;
