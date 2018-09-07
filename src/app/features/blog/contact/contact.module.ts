import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { BlogContactRoutingModule } from './contact-routing.module';

// Components
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    BlogContactRoutingModule
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class BlogContactModule { }
