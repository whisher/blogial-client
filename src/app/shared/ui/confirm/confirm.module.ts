import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmState, ConfirmService, UIConfirmComponent } from './confirm.component';

const UI_CONFIRM = [UIConfirmComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: UI_CONFIRM,
  providers: [ConfirmState, ConfirmService],
  exports: UI_CONFIRM,
  entryComponents: [
    UIConfirmComponent
  ]
})
export class UiConfirmModule { }
