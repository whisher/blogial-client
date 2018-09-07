import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { BlogHomeRoutingModule } from './home-routing.module';
import { UiLoaderModule } from '../../../shared/ui/loader/loader.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    BlogHomeRoutingModule,
    UiLoaderModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class BlogHomeModule { }
