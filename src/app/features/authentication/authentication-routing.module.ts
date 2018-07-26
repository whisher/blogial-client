import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthenticationMainComponent } from './layout/containers';
import {
  AuthenticationLoginPageComponent,
  AuthenticationLogoutComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '', component: AuthenticationMainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: 'login', component: AuthenticationLoginPageComponent },
    ]
  },
  { path: 'logout', component: AuthenticationLogoutComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES)
  ],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
