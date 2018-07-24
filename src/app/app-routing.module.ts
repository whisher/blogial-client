import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { AppPreloadingStrategy } from './app-preloading';

const routes: Routes = [
  { path: '', loadChildren: './features/showcase/showcase.module#ShowcaseModule', data: { preload: false } },
  { path: 'admin', loadChildren: './features/admin/admin.module#AdminModule', data: { preload: false } },
  { path: 'auth', loadChildren: './features/authentication/authentication.module#AuthenticationModule', data: { preload: false } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  providers: [ AppPreloadingStrategy ],
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: AppPreloadingStrategy }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
