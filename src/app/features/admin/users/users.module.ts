import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUsersRoutingModule } from './users-routing.module';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    AdminUsersRoutingModule
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class AdminUsersModule { }
