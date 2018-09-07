import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoleDirective } from './role.directive';
import { UiSubscribeDirective } from './subscribe.directive';

const UI_UTILITIES = [
  UiRoleDirective,
  UiSubscribeDirective
];

@NgModule({
  imports: [CommonModule],
  declarations: UI_UTILITIES,
  exports: UI_UTILITIES
})
export class UiUtilitiesModule { }
