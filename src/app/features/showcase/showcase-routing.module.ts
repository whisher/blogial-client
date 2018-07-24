import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowcaseMainComponent } from './layout/containers';



export const ROUTES: Routes = [
  {
    path: '', component: ShowcaseMainComponent,
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
