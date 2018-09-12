import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { BlogHomeRoutingModule } from './home-routing.module';
import { IconsModule } from '../../../shared/icons/icons.module';
import { UiButtonsModule } from '../../../shared/ui/buttons/buttons.module';
import { UiLoaderModule } from '../../../shared/ui/loader/loader.module';
import { UiUtilitiesModule } from '../../../shared/ui/utilities/utilities.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    BlogHomeRoutingModule,
    IconsModule,
    UiButtonsModule,
    UiButtonsModule,
    UiLoaderModule,
    UiUtilitiesModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class BlogHomeModule { }
