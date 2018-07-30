import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardMainComponent } from './containers';

export const ROUTES: Routes = [
  {
    path: '', component: AdminDashboardMainComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule {}
