import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  AccountGuard,
  AuthenticationGuard
} from '../../core/authentication/guards';
import { AdminLayoutMainComponent } from './layout/containers';

export const ROUTES: Routes = [
  {
    path: '', component: AdminLayoutMainComponent,
    canActivate: [AuthenticationGuard, AccountGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#AdminDashboardModule'
      },
      {
        path: 'media',
        loadChildren: './media/media.module#AdminMediaModule'
      },
      {
        path: 'posts',
        loadChildren: './posts/posts.module#AdminPostsModule'
      },
      {
        path: 'users',
        loadChildren: './users/users.module#AdminUsersModule'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
