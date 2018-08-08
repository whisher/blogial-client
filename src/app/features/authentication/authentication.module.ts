// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { IconsModule } from '../../shared/icons/icons.module';
import { UiButtonSpinnerModule } from '../../shared/ui/button-spinner/button-spinner.module';
import { UiPasswordModule } from '../../shared/ui/password/password.module';
import { AuthenticationLayoutModule } from './layout/layout.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IconsModule,
    UiButtonSpinnerModule,
    UiPasswordModule,
    AuthenticationLayoutModule,
    AuthenticationRoutingModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class AuthenticationModule { }
