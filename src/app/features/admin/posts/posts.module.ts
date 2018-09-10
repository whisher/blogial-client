// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Ng-Bootstrap
import {
  NgbModalModule,
  NgbTabsetModule,
  NgbButtonsModule} from '@ng-bootstrap/ng-bootstrap';

// Chips
//import { TagInputModule } from 'ngx-chips';

// Markdown
import { NgxMdModule } from 'ngx-md';

// Modules
import { IconsModule } from '../../../shared/icons/icons.module';
import { UiButtonsModule } from '../../../shared/ui/buttons/buttons.module';
import { UiButtonSpinnerModule } from '../../../shared/ui/button-spinner/button-spinner.module';
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

// Guards
import * as fromGuards from './guards';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbTabsetModule,
    NgbButtonsModule,
    //TagInputModule,
    NgxMdModule,
    IconsModule,
    UiButtonsModule,
    UiButtonSpinnerModule,
    UiConfirmModule,
    UiLoaderModule,
    AdminPostsRoutingModule
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
