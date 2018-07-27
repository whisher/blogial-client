import { NgModule, ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromService from './services';
import { reducers, effects } from './store';

@NgModule({
  imports: [
    RouterModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([...effects])
  ]
})

export class AuthenticationSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationSharedModule,
      providers: [
        ...fromService.services
      ]
    };
  }
}
