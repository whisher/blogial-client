// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Modules
import { IwdfIconsModule } from '../../shared/icons/icons.module';
import { IwdfUiButtonSpinnerModule } from '../../shared/ui/button-spinner/button-spinner.module';
import { IwdfUiPasswordModule } from '../../shared/ui/password/password.module';
import { AuthenticationLayoutModule } from './layout/layout.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IwdfIconsModule,
    IwdfUiButtonSpinnerModule,
    IwdfUiPasswordModule,
    AuthenticationLayoutModule,
    AuthenticationRoutingModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class AuthenticationModule { }
