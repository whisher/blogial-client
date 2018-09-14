// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { IconsModule } from '../../../shared/icons/icons.module';
import { UiButtonsModule } from '../../../shared/ui/buttons/buttons.module';
import { UiUtilitiesModule } from '../../../shared/ui/utilities/utilities.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    UiButtonsModule,
    UiUtilitiesModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class BlogLayoutModule { }
