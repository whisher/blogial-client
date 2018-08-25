import { PostsActionTypes, PostsActions } from '../actions/posts.action';
import { Post } from '../../models';

export interface State {
  entities: { [id: string]: Post };
  error: boolean;
  loaded: boolean;
  loading: boolean;
}

export const initialState: State = {
  entities: {},
  error: false,
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: PostsActions
): State {
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
        loading: false,
        loaded: true,
        entities
      };
    }

    case PostsActionTypes.LoadPostsFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case PostsActionTypes.AddPost:
    case PostsActionTypes.UpdatePost: {
      return {
        ...state,
        loading: true
      };
    }

    case PostsActionTypes.AddPostFail:
    case PostsActionTypes.UpdatePostFail:
    case PostsActionTypes.DeletePostFail: {
      return {
        ...state,
        error: true,
        loading: false
      };
    }

    case PostsActionTypes.AddPostSuccess:
    case PostsActionTypes.UpdatePostSuccess: {
      const post = action.payload.post;
      const entities = {
        ...state.entities,
        [post._id]: post
      };

      return {
        ...state,
        entities,
        error: false,
        loading: false
      };
    }

    case PostsActionTypes.DeletePostSuccess: {
      const id = action.payload.id;
      const { [id]: removed, ...entities } = state.entities;

      return {
        ...state,
        entities,
        error: false,
        loading: false
      };
    }
  }

  return state;
}

export const getPostsEntities = (state: State) => state.entities;
export const getPostsError = (state: State) => state.error;
export const getPostsLoading = (state: State) => state.loading;
export const getPostsLoaded = (state: State) => state.loaded;
