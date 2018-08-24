import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { BlogPostsRoutingModule } from './posts-routing.module';

import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    BlogPostsRoutingModule
  ],
  declarations: [
    ...fromContainers.containers
  ]
})
export class BlogPostsModule { }
