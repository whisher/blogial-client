import { PostsActionTypes, PostsActions } from '../actions/posts.action';
import { Post } from '../../models';

export interface State {
  entities: { [id: string]: Post };
  ids: Array<string>;
  error: boolean;
  loaded: boolean;
  loading: boolean;
}

export const initialState: State = {
  entities: {},
  ids: [],
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
        entities,
        ids: Object.keys(entities)
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
        ids: Object.keys(entities),
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
        ids: Object.keys(entities),
        error: false,
        loading: false
      };
    }

    case PostsActionTypes.FilterPostsByStatus: {
      const status = action.payload.status;
      const entities = { ...state.entities};
      const ids = Object.keys(entities).filter(id => {
        if(status==='draft'){
          return entities[id].isDraft
        }
        else if(status==='publisher'){
          return !entities[id].isDraft
        }
        else{
          return true;
        }
      });
      return {
        ...state,
        ids,
        error: false,
        loading: false
      };
    }

    case PostsActionTypes.FilterPostsByTitle: {
      const search = action.payload.search;
      const entities = { ...state.entities};
      const ids = Object.keys(entities).filter(id => {
        return entities[id].title.indexOf(search) !== -1;
      });
      return {
        ...state,
        ids,
        error: false,
        loading: false
      };
    }
  }

  return state;
}

export const getPostsIds = (state: State) => state.ids;
export const getPostsEntities = (state: State) => {
  const data = {};
  const ids = [...state.ids];
  ids.forEach(id => {
    data[id] = state.entities[id];
  });
  return data;
};
export const getPostsError = (state: State) => state.error;
export const getPostsLoading = (state: State) => state.loading;
export const getPostsLoaded = (state: State) => state.loaded;
