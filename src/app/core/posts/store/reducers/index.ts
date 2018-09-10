import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPosts from './posts.reducer';


export interface State {
  posts: fromPosts.State;
}

export const reducers: ActionReducerMap<State> = {
  posts: fromPosts.reducer
};

export const getPostsState = createFeatureSelector<State>(
  'posts'
);
