import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiPasswordComponent } from './password.component';

const UI_PASSWORD = [UiPasswordComponent];

@NgModule({
  imports: [CommonModule],
  declarations: UI_PASSWORD,
  exports: UI_PASSWORD
})
export class UiPasswordModule { }
