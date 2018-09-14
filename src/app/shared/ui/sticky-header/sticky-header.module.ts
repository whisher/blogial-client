import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiStickyHeaderComponent } from './sticky-header.component';
const UI_STICKY_HEADER = [UiStickyHeaderComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: UI_STICKY_HEADER,
  exports: UI_STICKY_HEADER
})
export class UiStickyHeaderModule { }
