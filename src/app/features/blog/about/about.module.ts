import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { BlogAboutRoutingModule } from './about-routing.module';

// Components
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    BlogAboutRoutingModule
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class BlogAboutModule { }
