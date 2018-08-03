import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostPageGuard } from './guards';
import { PostsGuard } from './shared/guards';

import {
  AdminPostsMainComponent,
  AdminPostsPostPageComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: AdminPostsMainComponent,
    canActivate: [ PostsGuard ],
    pathMatch: 'full'
  },
  {
    path: 'post',
    canDeactivate: [PostPageGuard],
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
