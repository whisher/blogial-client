// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Ng-Bootstrap
import {
  NgbModalModule,
  NgbTabsetModule,
  NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';


import { NgxMdModule } from 'ngx-md';

// Module
import { AdminPostsRoutingModule } from './posts-routing.module';
import { IconsModule } from '../../../shared/icons/icons.module';
import { UiButtonsModule } from '../../../shared/ui/buttons/buttons.module';
import { UiButtonSpinnerModule } from '../../../shared/ui/button-spinner/button-spinner.module';
import { UiLoaderModule } from '../../../shared/ui/loader/loader.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromModals from './modals';
import {
  AdminPostsPostDeleteComponent,
  AdminPostsPostGalleryComponent
} from './modals';

// Guards
import * as fromGuards from './guards';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbTabsetModule,
    NgbButtonsModule,
    NgxMdModule,
    AdminPostsRoutingModule,
    IconsModule,
    UiButtonsModule,
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
  entryComponents: [
    AdminPostsPostDeleteComponent,
    AdminPostsPostGalleryComponent
  ]
})
export class AdminPostsModule { }
