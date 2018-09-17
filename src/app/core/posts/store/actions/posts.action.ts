import { Action } from '@ngrx/store';

import { Post } from '../../models';

export enum PostsActionTypes {
  LoadPosts = '[Posts] Load Posts',
  LoadPostsSuccess = '[Posts] Load Posts Success',
  LoadPostsFail = '[Posts] Load Posts Fail',
  LoadPost = '[Posts] Load Post',
  LoadPostSuccess = '[Posts] Load Post Success',
  LoadPostFail = '[Posts] Load Post Fail',
  AddPost = '[Posts] Add Post',
  AddPostSuccess = '[Posts] Add Post Success',
  AddPostFail = '[Posts] Add Post Fail',
  UpdatePost = '[Posts] Update Post',
  UpdatePostSuccess = '[Posts] Update Post Success',
  UpdatePostFail = '[Posts] Update Post Fail',
  DeletePost = '[Posts] Delete Post',
  DeletePostSuccess = '[Posts] Delete Post Success',
  DeletePostFail = '[Posts] Delete Post Fail',
  NotificationPost = '[Posts] Notification Post',
  NotificationPostFail = '[Posts] Notification Post Fail',
  NotificationPostSuccess = '[Posts] Notification Post Success',
  FilterPostsByStatus = '[Posts] Filter Posts By Status',
  FilterPostsByTitle = '[Posts] Filter Posts By Title'
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

export class NotificationPost implements Action {
  readonly type = PostsActionTypes.NotificationPost;

  constructor(public payload: { post: Post }) {}
}

export class NotificationPostFail implements Action {
  readonly type = PostsActionTypes.NotificationPostFail;

  constructor(public payload: any) {
      console.log('notification fail',payload);
  }
}

export class NotificationPostSuccess implements Action {
  readonly type = PostsActionTypes.NotificationPostSuccess;

  constructor(public payload: { post: Post }) {
      console.log('notification',payload);
  }
}

export class FilterPostsByStatus implements Action {
  readonly type = PostsActionTypes.FilterPostsByStatus;

  constructor(public payload: { status: string }) {}
}

export class FilterPostsByTitle implements Action {
  readonly type = PostsActionTypes.FilterPostsByTitle;

  constructor(public payload: { search: string }) {}
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
  | DeletePostSuccess
  | NotificationPost
  | NotificationPostFail
  | NotificationPostSuccess
  | FilterPostsByStatus
  | FilterPostsByTitle;
