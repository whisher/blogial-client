import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

import * as fromRoot from '../../../../../store/reducers';
import * as fromAuthentication from './authentication.reducers';
import * as fromLoginPage from './login-page.reducers';

export interface AuthenticationState {
  status: fromAuthentication.State;
  loginPage: fromLoginPage.State;
}

export interface State extends fromRoot.State {
  auth: AuthenticationState;
}

export const reducers: ActionReducerMap<AuthenticationState> = {
  status: fromAuthentication.reducer,
  loginPage: fromLoginPage.reducer
};

export const selectAuthenticationState = createFeatureSelector<AuthenticationState>('auth');

export const selectAuthStatusState = createSelector(
  selectAuthenticationState,
  (state: AuthenticationState) => state.status
);

export const getLoggedIn = createSelector(
  selectAuthStatusState,
  fromAuthentication.getLoggedIn
);

export const getToken = createSelector(
  selectAuthStatusState,
  fromAuthentication.getToken
);

export const selectLoginPageState = createSelector(
  selectAuthenticationState,
  (state: AuthenticationState) => state.loginPage
);

export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);

export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);
