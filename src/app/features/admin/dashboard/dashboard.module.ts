import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { AdminDashboardRoutingModule } from './dashboard-routing.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';


@NgModule({
  imports: [
    CommonModule,
    AdminDashboardRoutingModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ]
})
export class AdminDashboardModule { }
