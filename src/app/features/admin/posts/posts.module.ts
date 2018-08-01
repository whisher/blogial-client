// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Module
import { AdminPostsRoutingModule } from './posts-routing.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminPostsRoutingModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class AdminPostsModule { }
