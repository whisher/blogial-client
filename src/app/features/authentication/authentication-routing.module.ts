import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginGuard } from '../../shared/features/authentication/guards';
import { AuthenticationLayoutMainComponent } from './layout/containers';
import {
  AuthenticationLoginPageComponent,
  AuthenticationLogoutComponent
} from './containers';

export const ROUTES: Routes = [
  {
    path: '', component: AuthenticationLayoutMainComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        canActivate: [LoginGuard],
        component: AuthenticationLoginPageComponent
      },
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
