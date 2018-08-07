import { createSelector } from '@ngrx/store';

import * as fromFeature from '../reducers';
import * as fromAuthentication from '../reducers/authentication.reducers';
import * as fromLoginPage from '../reducers/login-page.reducers';
import * as fromAccount from '../reducers/account.reducers';

export const selectAuthStatusState = createSelector(
  fromFeature.selectAuthenticationState,
  (state: fromFeature.AuthenticationState) => state.status
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
  fromFeature.selectAuthenticationState,
  (state: fromFeature.AuthenticationState) => state.loginPage
);

export const getLoginPageError = createSelector(
  selectLoginPageState,
  fromLoginPage.getError
);

export const getLoginPagePending = createSelector(
  selectLoginPageState,
  fromLoginPage.getPending
);

export const getAccount = createSelector(
  fromFeature.selectAuthenticationState,
  (state: fromFeature.AuthenticationState) => state.account.account
);
