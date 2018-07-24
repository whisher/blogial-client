import { NgModule } from '@angular/core';

import { AdminLayoutModule } from './layout/layout.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    AdminLayoutModule,
    AdminRoutingModule
  ],
  declarations: []
})
export class AdminModule { }
