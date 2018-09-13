import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiChipsComponent } from './chips.component';

const UI_CHIPS = [UiChipsComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: UI_CHIPS,
  exports: UI_CHIPS
})
export class UiChipsModule { }
