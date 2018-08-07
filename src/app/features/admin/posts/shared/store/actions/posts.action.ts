import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Post } from '../../../models/post.model';

export enum PostsActionTypes {
  LoadPosts = '[Posts] Load Posts',
  LoadPostsSuccess = '[Posts] Load Posts Success',
  LoadPostsFail = '[Posts] Load Fail',
  LoadPost = '[Posts] Load',
  LoadPostSuccess = '[Posts] Load Success',
  LoadPostFail = '[Posts] Load Fail',
  AddPost = '[Posts] Add Post',
  AddPostSuccess = '[Posts] Add Post Success',
  AddPostFail = '[Posts] Add Post Fail',
  UpdatePost = '[Posts] Update Post',
  UpdatePostSuccess = '[Posts] Update Post Success',
  UpdatePostFail = '[Posts] Update Post Fail',
  DeletePost = '[Posts] Delete Post',
  DeletePostSuccess = '[Posts] Delete Post Success',
  DeletePostFail = '[Posts] Delete Post Fail'
}

export class LoadPosts implements Action {
  readonly type = PostsActionTypes.LoadPosts;
}

export class LoadPostsFail implements Action {
  readonly type = PostsActionTypes.LoadPostsFail;

  constructor(public payload: any) {}
}

export class LoadPostsSuccess implements Action {
  readonly type = PostsActionTypes.LoadPostsSuccess;

  constructor(public payload: { posts: Post[] }) {}
}

export class AddPost implements Action {
  readonly type = PostsActionTypes.AddPost;

  constructor(public payload: { post: Post }) {}
}

export class AddPostFail implements Action {
  readonly type = PostsActionTypes.AddPostFail;

  constructor(public payload: any) {}
}

export class AddPostSuccess implements Action {
  readonly type = PostsActionTypes.AddPostSuccess;

  constructor(public payload: { post: Post }) {}
}

export class UpdatePost implements Action {
  readonly type = PostsActionTypes.UpdatePost;

  constructor(public payload: { post: Post }) {}
}

export class UpdatePostFail implements Action {
  readonly type = PostsActionTypes.UpdatePostFail;

  constructor(public payload: any) {}
}

export class UpdatePostSuccess implements Action {
  readonly type = PostsActionTypes.UpdatePostSuccess;

  constructor(public payload: { post: Post }) {}
}

export class DeletePost implements Action {
  readonly type = PostsActionTypes.DeletePost;

  constructor(public payload: { id }) {}
}

export class DeletePostFail implements Action {
  readonly type = PostsActionTypes.DeletePostFail;

  constructor(public payload: any) {}
}

export class DeletePostSuccess implements Action {
  readonly type = PostsActionTypes.DeletePostSuccess;

  constructor(public payload: { id }) {}
}

export type PostsActions =
  | LoadPosts
  | LoadPostsFail
  | LoadPostsSuccess
  | AddPost
  | AddPostFail
  | AddPostSuccess
  | UpdatePost
  | UpdatePostFail
  | UpdatePostSuccess
  | DeletePost
  | DeletePostFail
  | DeletePostSuccess;
