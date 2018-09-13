// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Ng-Bootstrap
import {
  NgbModalModule,
  NgbTabsetModule,
  NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';


// Markdown
import { NgxMdModule } from 'ngx-md';

// Modules
import { IconsModule } from '../../../shared/icons/icons.module';
import { UiButtonsModule } from '../../../shared/ui/buttons/buttons.module';
import { UiButtonSpinnerModule } from '../../../shared/ui/button-spinner/button-spinner.module';
import { UiChipsModule } from '../../../shared/ui/chips/chips.module';
import { UiConfirmModule } from '../../../shared/ui/confirm/confirm.module';
import { UiLoaderModule } from '../../../shared/ui/loader/loader.module';

// Routing
import { AdminPostsRoutingModule } from './posts-routing.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';

// Modals
import * as fromModals from './modals';

import {
  AdminPostsPostDeleteComponent,
  AdminPostsPostGalleryComponent
} from './modals';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbTabsetModule,
    NgbButtonsModule,
    NgxMdModule,
    IconsModule,
    UiButtonsModule,
    UiButtonSpinnerModule,
    UiChipsModule,
    UiConfirmModule,
    UiLoaderModule,
    AdminPostsRoutingModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
    ...fromModals.modals
  ],
  providers: [],
  entryComponents: [
    AdminPostsPostDeleteComponent,
    AdminPostsPostGalleryComponent
  ]
})
export class AdminPostsModule { }
