// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// External
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Module
import { AdminPostsRoutingModule } from './posts-routing.module';
import { IconsModule } from '../../../shared/icons/icons.module';
import { UiButtonSpinnerModule } from '../../../shared/ui/button-spinner/button-spinner.module';
import { UiLoaderModule } from '../../../shared/ui/loader/loader.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromModals from './modals';

// Guards
import * as fromGuards from './guards';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
    AdminPostsRoutingModule,
    IconsModule,
    UiButtonSpinnerModule,
    UiLoaderModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
    ...fromModals.modals
  ],
  providers: [
    ...fromGuards.guards
  ],
  entryComponents: [...fromModals.modals]
})
export class AdminPostsModule { }
