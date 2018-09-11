import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersGuard } from '../../../core/users/guards';
import { IsPristineGuard } from '../../../shared/ui/confirm/confirm.guard';

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
    canDeactivate: [IsPristineGuard],
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
