import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiFabButtonComponent } from './buttons.component';

const UI_BUTTONS = [UiFabButtonComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: UI_BUTTONS,
  exports: UI_BUTTONS
})
export class UiButtonsModule { }
