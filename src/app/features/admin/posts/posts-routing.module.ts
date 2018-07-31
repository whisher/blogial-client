import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPostsMainComponent } from './containers';

export const ROUTES: Routes = [
  {
    path: '', component: AdminPostsMainComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AdminPostsRoutingModule {}
