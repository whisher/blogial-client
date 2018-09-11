import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ConfirmState,
  ConfirmService,
  UIConfirmComponent } from './confirm.component';

import { IsPristineGuard } from './confirm.guard';

const UI_CONFIRM_COMPONENTS = [UIConfirmComponent];
const UI_CONFIRM_PROVIDERS = [ConfirmState, ConfirmService, IsPristineGuard];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: UI_CONFIRM_COMPONENTS,
  providers: UI_CONFIRM_PROVIDERS,
  exports: UI_CONFIRM_COMPONENTS,
  entryComponents: [
    UIConfirmComponent
  ]
})
export class UiConfirmModule { }
