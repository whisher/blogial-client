import { NgModule } from '@angular/core';

import { BlogLayoutModule } from './layout/layout.module';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  imports: [
    BlogLayoutModule,
    BlogRoutingModule
  ],
  declarations: []
})
export class BlogModule { }
