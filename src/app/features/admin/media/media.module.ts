import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminMediaRoutingModule } from './media-routing.module';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    AdminMediaRoutingModule
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class AdminMediaModule { }
