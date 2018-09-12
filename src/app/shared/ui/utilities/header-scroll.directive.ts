import {Directive, Inject, HostBinding, HostListener} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { WINDOW } from './window.service';

@Directive({
  selector: '[uiHeaderScroll]'
})
export class UiHeaderScrollDirective {
    @HostBinding('class') private cls = 'isBgHeaderDefault';
    @HostListener('window:scroll', ['$event'])
    onScroll(){
      const windowScroll = this.window.pageYOffset;
      const isScrolled = windowScroll > 16;
      this.cls = isScrolled ? 'isBgHeaderScrolled' : 'isBgHeaderDefault';
    }
    constructor(
      @Inject(DOCUMENT) private document: Document,
      @Inject(WINDOW) private window
    ) { }
}
