import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminMediaMainComponent } from './containers';

export const ROUTES: Routes = [
  {
    path: '', component: AdminMediaMainComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AdminMediaRoutingModule {}
