import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPostsRoutingModule } from './posts-routing.module';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    AdminPostsRoutingModule
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class AdminPostsModule { }
