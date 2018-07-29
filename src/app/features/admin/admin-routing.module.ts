import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutMainComponent } from './layout/containers';

export const ROUTES: Routes = [
  {
    path: '', component: AdminLayoutMainComponent,
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
