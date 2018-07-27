import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IwdfUiPasswordComponent } from './password.component';

const IWDF_UI_PASSWORD = [IwdfUiPasswordComponent];

@NgModule({
  imports: [CommonModule],
  declarations: IWDF_UI_PASSWORD,
  exports: IWDF_UI_PASSWORD
})
export class IwdfUiPasswordModule { }
