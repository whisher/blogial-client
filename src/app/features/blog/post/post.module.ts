import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Markdown
import { NgxMdModule } from 'ngx-md';

// Ng-bootstrap
import {
  NgbCarouselModule,
  NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Modules
import { UiGalleryModule } from '../../../shared/ui/gallery/gallery.module';
import { UiLoaderModule } from '../../../shared/ui/loader/loader.module';
import { BlogPostRoutingModule } from './post-routing.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';


@NgModule({
  imports: [
    CommonModule,
    NgxMdModule,
    NgbCarouselModule,
    NgbModalModule,
    UiGalleryModule,
    UiLoaderModule,
    BlogPostRoutingModule
  ],
  declarations: [
    ...fromComponents.components,
    ...fromContainers.containers,
  ]
})
export class BlogPostModule { }
