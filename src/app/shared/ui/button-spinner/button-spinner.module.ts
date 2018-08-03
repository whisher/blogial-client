import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IwdfButtonSpinnerComponent } from './button-spinner.component';

const IWDF_BUTTON_SPINNER = [IwdfButtonSpinnerComponent];

@NgModule({
  imports: [CommonModule],
  declarations: IWDF_BUTTON_SPINNER,
  exports: IWDF_BUTTON_SPINNER
})
export class IwdfUiButtonSpinnerModule { }
