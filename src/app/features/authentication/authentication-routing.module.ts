import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationMainComponent } from './layout/containers';



export const ROUTES: Routes = [
  {
    path: '', component: AuthenticationMainComponent,
    children: []
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
