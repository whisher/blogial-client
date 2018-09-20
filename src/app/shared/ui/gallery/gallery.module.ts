import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  NgbCarouselModule,
  NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { UiCarouselComponent } from './components/carousel/carousel.component';
import { UiGalleryComponent } from './components/gallery/gallery.component';

const UI_GALLERY = [
  UiCarouselComponent,
  UiGalleryComponent
];

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule,
    NgbModalModule
  ],
  declarations: UI_GALLERY,
  exports: [
    ...UI_GALLERY
  ],
  entryComponents: [
    UiCarouselComponent
  ]
})
export class UiGalleryModule { }
