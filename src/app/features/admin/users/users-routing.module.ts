import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPageGuard } from './guards';
import { UsersGuard } from '../../../core/users/guards';
import {
  AdminUsersMainComponent,
  AdminUsersUserPageComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: AdminUsersMainComponent,
    canActivate: [UsersGuard],
    pathMatch: 'full'
  },
  {
    path: 'user',
    canDeactivate: [UserPageGuard],
    component: AdminUsersUserPageComponent
  },
  {
    path: 'user/:id', component: AdminUsersUserPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AdminUsersRoutingModule {}
