import { NgModule, ModuleWithProviders } from '@angular/core';

import * as fromService from './services';

@NgModule({
  imports: []
})

export class PostsSharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PostsSharedModule,
      providers: [
        ...fromService.services
      ]
    };
  }
}
