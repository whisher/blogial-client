import { createSelector } from '@ngrx/store';

import { AuthenticationToken } from '../../models';
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

export const isValidToken = createSelector(
  getLoggedIn,
  getToken,
  (authed: boolean, token: AuthenticationToken) => {
    if(!authed){
      return false
    }
    const now = new Date();
    const expiredAt = new Date();
    expiredAt.setSeconds(expiredAt.getSeconds() + token.expiresIn);
    return expiredAt > now;
  }
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

export const getAccountLoaded = createSelector(
  fromFeature.selectAuthenticationState,
  (state: fromFeature.AuthenticationState) => state.account.isLoaded
);

export const getAccount = createSelector(
  fromFeature.selectAuthenticationState,
  (state: fromFeature.AuthenticationState) => state.account.account
);
