// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// External
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

// Modules
import { IconsModule } from '../../../shared/icons/icons.module';
import { UiUtilitiesModule } from '../../../shared/ui/utilities/utilities.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    IconsModule,
    UiUtilitiesModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class AdminLayoutModule { }
