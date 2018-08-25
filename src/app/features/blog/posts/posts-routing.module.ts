import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsGuard } from '../../../shared/features/posts/guards';

import {
  BlogPostsMainComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: BlogPostsMainComponent,
    canActivate: [PostsGuard],
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class BlogPostsRoutingModule {}
