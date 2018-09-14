import {Directive, Inject, HostBinding, HostListener} from '@angular/core';
import {
  animate,
  style,
  state,
  transition,
  trigger } from '@angular/animations';

import { of } from 'rxjs';

import { WINDOW } from './window.service';

@Directive({
  selector: '[uiHeaderScroll]',
})
export class UiHeaderScrollDirective {
    @HostBinding('class') private cls = 'isBgHeaderDefault';
    @HostListener('window:scroll', ['$event'])
    onScroll(){
      const windowScroll = this.window.pageYOffset;
      const isScrolled = windowScroll > 16;
      this.cls = isScrolled ? 'isBgHeaderScrolled o-container-fixed' : 'isBgHeaderDefault';
    }
    constructor(
      @Inject(WINDOW) private window
    ) { }
}
