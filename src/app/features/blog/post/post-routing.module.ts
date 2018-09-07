import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsGuard } from '../../../shared/features/posts/guards';

import {
  BlogPostMainComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: BlogPostMainComponent,
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
export class BlogPostRoutingModule {}
