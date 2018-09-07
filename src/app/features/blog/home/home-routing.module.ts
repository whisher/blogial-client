import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsGuard } from '../../../shared/features/posts/guards';

import {
  BlogHomeMainComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: BlogHomeMainComponent,
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
export class BlogHomeRoutingModule {}
