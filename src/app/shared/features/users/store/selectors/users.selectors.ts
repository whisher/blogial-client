import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../../store';
import * as fromFeature from '../reducers';
import * as fromUsers from '../reducers/users.reducer';
import * as fromAuthentication from '../../../authentication/store/reducers';
import { User } from '../../models';

export const getUserState = createSelector(
  fromFeature.getUsersState,
  (state: fromFeature.State) => state.users
);

export const getUsersEntities = createSelector(
  getUserState,
  fromUsers.getUsersEntities
);

export const getUsersFilterEntities = createSelector(
  getUsersEntities,
  fromAuthentication.selectAuthenticationState,
  (entities, authentication):{ [id: string]: User } => {
    const data = {};
    Object.entries(entities).forEach(function(entity) {
      if(entity[0] !== authentication.account.account._id){
        data[entity[0]] = entity[1];
      }
    });
    return data;
  }
);

export const getSelectedUser = createSelector(
  getUsersEntities,
  fromRoot.getRouterState,
  (entities, router): User => {
    return router.state && entities[router.state.params.id];
  }
);

export const getAllPosts = createSelector(
  getUsersEntities,
  entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getHasUsers = createSelector(
  getUsersFilterEntities,
  entities => {
  return Object.keys(entities).length;
});

export const getUsersLoaded = createSelector(
  getUserState,
  fromUsers.getUsersLoaded
);

export const getUsersLoading = createSelector(
  getUserState,
  fromUsers.getUsersLoading
);

export const getUsersError = createSelector(
  getUserState,
  fromUsers.getUsersError
);
