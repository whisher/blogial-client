import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as fromGuards from './guards';
import * as fromInterceptors from './interceptors';
import * as fromService from './services';

import { reducers, effects } from './store';

@NgModule({
  imports: [
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature(effects)
  ]
})

export class AuthenticationSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationSharedModule,
      providers: [
        ...fromGuards.guards,
        ...fromInterceptors.interceptors,
        ...fromService.services
      ]
    };
  }
}
