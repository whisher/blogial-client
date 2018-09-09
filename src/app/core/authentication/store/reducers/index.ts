import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';

//import * as fromRoot from '../../../../../store/reducers';
import * as fromAccount from './account.reducers';
import * as fromAuthentication from './authentication.reducers';
import * as fromLoginPage from './login-page.reducers';

export interface AuthenticationState {
  status: fromAuthentication.State;
  loginPage: fromLoginPage.State;
  account: fromAccount.State
}

export interface State  {
  auth: AuthenticationState;
}

export const reducers: ActionReducerMap<AuthenticationState> = {
  status: fromAuthentication.reducer,
  loginPage: fromLoginPage.reducer,
  account: fromAccount.reducer
};

export const selectAuthenticationState = createFeatureSelector<AuthenticationState>('auth');
