import { createSelector } from '@ngrx/store';

import * as fromRoot from '../../../../../store';
import * as fromFeature from '../reducers';
import * as fromPosts from '../reducers/posts.reducer';
import { Post } from '../../models';

export const getPostState = createSelector(
  fromFeature.getPostsState,
  (state: fromFeature.State) => state.posts
);

export const getPostsEntities = createSelector(
  getPostState,
  fromPosts.getPostsEntities
);

export const getSelectedPost = createSelector(
  getPostsEntities,
  fromRoot.getRouterState,
  (entities, router): Post => {
    return router.state && entities[router.state.params.id];
  }
);

export const getSelectedPostBySlug = createSelector(
  getPostsEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    const values = Object.values(entities) as Post[];
    return values.filter(post => post.slug===router.state.params.slug)[0];
  }
);

export const getAllPosts = createSelector(
  getPostsEntities,
  entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});

export const getHasPosts = createSelector(
  getPostsEntities,
  entities => {
  return Object.keys(entities).length;
});

export const getPostsLoaded = createSelector(
  getPostState,
  fromPosts.getPostsLoaded
);

export const getPostsLoading = createSelector(
  getPostState,
  fromPosts.getPostsLoading
);

export const getPostsError = createSelector(
  getPostState,
  fromPosts.getPostsError
);
