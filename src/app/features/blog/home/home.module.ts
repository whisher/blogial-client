import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { BlogHomeRoutingModule } from './home-routing.module';

import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    BlogHomeRoutingModule
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class BlogHomeModule { }
