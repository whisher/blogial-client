import {
  Action,
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';

import * as fromRouter from '@ngrx/router-store';

import { environment } from '../../../environments/environment';
import { RouterStateUrl, customStorage } from '../utils';
import { AuthenticationActionTypes } from '../../shared/features/authentication/store/actions';

export interface State {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  router: routerReducer
};

export const getRouterState = createFeatureSelector<
  fromRouter.RouterReducerState<RouterStateUrl>
>('router');

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [{auth:['status']}],
    rehydrate: true,
    storage: customStorage
  })(reducer);
}

export function clearState(reducer: ActionReducer<State>): ActionReducer<State> {
  return function(state: State, action: Action): State {
    if (action.type === AuthenticationActionTypes.Logout) {
      state = undefined;
    }
    return reducer(state, action);
  };
}
export const metaReducers: MetaReducer<State>[] =
  !environment.production ? [storeFreeze, localStorageSyncReducer, clearState] : [localStorageSyncReducer, clearState];
