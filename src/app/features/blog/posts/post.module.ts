import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { BlogPostsRoutingModule } from './posts-routing.module';
import { UiLoaderModule } from '../../../shared/ui/loader/loader.module';

import * as fromComponents from './components';
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    BlogPostsRoutingModule,
    UiLoaderModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers
  ]
})
export class BlogPostsModule { }
