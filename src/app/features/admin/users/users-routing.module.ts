import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUsersMainComponent } from './containers';

export const ROUTES: Routes = [
  {
    path: '', component: AdminUsersMainComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AdminUsersRoutingModule {}
