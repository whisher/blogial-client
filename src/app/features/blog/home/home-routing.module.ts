import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {
  BlogHomeMainComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '',
    component: BlogHomeMainComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class BlogHomeRoutingModule {}
