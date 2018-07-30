import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './dashboard-routing.module';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class AdminDashboardModule { }
