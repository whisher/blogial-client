import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowcaseLayoutMainComponent } from './layout/containers';



export const ROUTES: Routes = [
  {
    path: '', component: ShowcaseLayoutMainComponent,
    children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class ShowcaseRoutingModule { }
