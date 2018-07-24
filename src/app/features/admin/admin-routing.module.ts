import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMainComponent } from './layout/containers';

export const ROUTES: Routes = [
  {
    path: '', component: AdminMainComponent,
    children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
