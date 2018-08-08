// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Module
import { UiButtonSpinnerModule } from '../../../shared/ui/button-spinner/button-spinner.module';
import { UiLoaderModule } from '../../../shared/ui/loader/loader.module';
import { AdminPostsRoutingModule } from './posts-routing.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';

// Guards
import * as fromGuards from './guards';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
    UiButtonSpinnerModule,
    UiLoaderModule,
    AdminPostsRoutingModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ],
  providers: [
    ...fromGuards.guards
  ]
})
export class AdminPostsModule { }
