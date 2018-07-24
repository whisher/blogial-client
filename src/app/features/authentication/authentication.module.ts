import { NgModule } from '@angular/core';

import { AuthenticationLayoutModule } from './layout/layout.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
  imports: [
    AuthenticationLayoutModule,
    AuthenticationRoutingModule
  ],
  declarations: []
})
export class AuthenticationModule { }
