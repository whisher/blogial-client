import { NgModule, ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';
import * as fromService from './services';
import * as fromGuards from './guards';

@NgModule({
  imports: [
    StoreModule.forFeature('posts', reducers),
    EffectsModule.forFeature(effects),
  ]
})

export class CorePostsdModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CorePostsdModule,
      providers: [
        ...fromGuards.guards,
        ...fromService.services
      ]
    };
  }
}
