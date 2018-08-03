import { PostsActionTypes, PostsActions } from '../actions/posts.action';
import { Post } from '../../../models/post.model';

export interface PostsState {
  entities: { [id: string]: Post };
  error: boolean;
  loaded: boolean;
  loading: boolean;
}

export const initialState: PostsState = {
  entities: {},
  error: false,
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: PostsActions
): PostsState {
  switch (action.type) {
    case PostsActionTypes.LoadPosts: {
      return {
        ...state,
        loading: true,
      };
    }

    case PostsActionTypes.LoadPostsSuccess: {
      const posts = action.payload.posts;

      const entities = posts.reduce(
        (entities: { [id: string]: Post }, post: Post) => {
          return {
            ...entities,
            [post._id]: post,
          };
        },
        {
          ...state.entities,
        }
      );

      return {
        ...state,
        entities,
        error: false,
        loading: false,
        loaded: true
      };
    }

    case PostsActionTypes.LoadPostsFail: {
      return {
        ...state,
        entities: {},
        error: true,
        loading: false,
        loaded: false
      };
    }

    case PostsActionTypes.AddPostSuccess:
    case PostsActionTypes.UpdatePostSuccess: {
      const post = action.payload.post;
      const entities = {
        ...state.entities,
        [post._id]: post,
      };

      return {
        ...state,
        entities,
        error: false,
        loading: false,
        loaded: false
      };
    }

    case PostsActionTypes.DeletePostSuccess: {
      const post = action.payload.post;
      const { [post._id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
        error: false,
        loading: false,
        loaded: false
      };
    }
  }

  return state;
}

export const getPostsEntities = (state: PostsState) => state.entities;
export const getPostsError = (state: PostsState) => state.error;
export const getPostsLoading = (state: PostsState) => state.loading;
export const getPostsLoaded = (state: PostsState) => state.loaded;
