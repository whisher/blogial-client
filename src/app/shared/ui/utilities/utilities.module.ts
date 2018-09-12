import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiGoToTopDirective } from './go-to-top.directive';
import { UiHeaderScrollDirective } from './header-scroll.directive';
import { UiRoleDirective } from './role.directive';
import { UiSubscribeDirective } from './subscribe.directive';
import { WINDOW_PROVIDERS } from './window.service';

const UI_UTILITIES = [
  UiGoToTopDirective,
  UiHeaderScrollDirective,
  UiRoleDirective,
  UiSubscribeDirective
];

@NgModule({
  imports: [CommonModule],
  declarations: UI_UTILITIES,
  providers: [ WINDOW_PROVIDERS ],
  exports: UI_UTILITIES
})
export class UiUtilitiesModule { }
