import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Ng-Bootstrap
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Modules
import { IconsModule } from '../../../shared/icons/icons.module';
import { UiButtonsModule } from '../../../shared/ui/buttons/buttons.module';
import { UiButtonSpinnerModule } from '../../../shared/ui/button-spinner/button-spinner.module';
import { UiConfirmModule } from '../../../shared/ui/confirm/confirm.module';
import { UiLoaderModule } from '../../../shared/ui/loader/loader.module';
import { UiPasswordModule } from '../../../shared/ui/password/password.module';

// Routing
import { AdminUsersRoutingModule } from './users-routing.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';

// Modals
import * as fromModals from './modals';

import {
  AdminUsersUserDeleteComponent
} from './modals';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
    IconsModule,
    UiButtonsModule,
    UiButtonSpinnerModule,
    UiConfirmModule,
    UiLoaderModule,
    UiPasswordModule,
    AdminUsersRoutingModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
    ...fromModals.modals
  ],
  providers: [],
  entryComponents: [
    AdminUsersUserDeleteComponent
  ]
})
export class AdminUsersModule { }
