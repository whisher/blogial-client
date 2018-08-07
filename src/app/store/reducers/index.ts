import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { routerReducer } from '@ngrx/router-store';
import { localStorageSync } from 'ngrx-store-localstorage';

import { environment } from '../../../environments/environment';

import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl, customStorage } from '../utils';


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
    keys: [{auth:['status','account']}],
    rehydrate: true,
    storage: customStorage
  })(reducer);
}

export const metaReducers: MetaReducer<State>[] =
  !environment.production ? [storeFreeze, localStorageSyncReducer] : [localStorageSyncReducer];
