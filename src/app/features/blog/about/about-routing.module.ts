import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  BlogAboutMainComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: BlogAboutMainComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class BlogAboutRoutingModule {}
