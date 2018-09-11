import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsGuard } from '../../../core/posts/guards';
import { IsPristineGuard } from '../../../shared/ui/confirm/confirm.guard';

import {
  AdminPostsMainComponent,
  AdminPostsPostPageComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: AdminPostsMainComponent,
    canActivate: [PostsGuard],
    pathMatch: 'full'
  },
  {
    path: 'post',
    canDeactivate: [IsPristineGuard],
    component: AdminPostsPostPageComponent
  },
  {
    path: 'post/:id', component: AdminPostsPostPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AdminPostsRoutingModule {}
