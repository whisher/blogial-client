/* Core */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { AuthenticationLayoutModule } from './layout/layout.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

/* Components */
import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthenticationLayoutModule,
    AuthenticationRoutingModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class AuthenticationModule { }
