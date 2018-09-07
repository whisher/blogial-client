import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  BlogContactMainComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: BlogContactMainComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class BlogContactRoutingModule {}
