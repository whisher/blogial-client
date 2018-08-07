import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromPosts from './posts.reducer';


export interface PostsState {
  posts: fromPosts.PostsState;
}
 
export const reducers: ActionReducerMap<PostsState> = {
  posts: fromPosts.reducer
};

export const getPostsState = createFeatureSelector<PostsState>(
  'posts'
);
