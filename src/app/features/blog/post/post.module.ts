import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Markdown
import { NgxMdModule } from 'ngx-md';

// Ng-bootstrap
import {
  NgbCarouselModule,
  NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

// Modules
import { UiLoaderModule } from '../../../shared/ui/loader/loader.module';
import { BlogPostRoutingModule } from './post-routing.module';

// Components
import * as fromComponents from './components';
import * as fromContainers from './containers';
import * as fromModals from './modals';
import { BlogPostCarouselComponent } from './modals/post-carousel/post-carousel.component';

@NgModule({
  imports: [
    CommonModule,
    NgxMdModule,
    NgbCarouselModule,
    NgbModalModule,
    UiLoaderModule,
    BlogPostRoutingModule
  ],
  declarations: [
    ...fromModals.modals,
    ...fromComponents.components,
    ...fromContainers.containers,
  ],
  entryComponents: [
    ...fromModals.modals
  ]
})
export class BlogPostModule { }
