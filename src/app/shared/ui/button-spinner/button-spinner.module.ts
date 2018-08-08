import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiButtonSpinnerComponent } from './button-spinner.component';

const UI_BUTTON_SPINNER = [UiButtonSpinnerComponent];

@NgModule({
  imports: [CommonModule],
  declarations: UI_BUTTON_SPINNER,
  exports: UI_BUTTON_SPINNER
})
export class UiButtonSpinnerModule { }
