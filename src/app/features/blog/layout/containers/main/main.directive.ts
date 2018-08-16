import {Directive, HostBinding,HostListener, OnInit} from '@angular/core';

import { fromEvent } from 'rxjs';
import {
  distinctUntilChanged,
  map,
  startWith,
  throttleTime
} from 'rxjs/operators';

@Directive({
  selector: '[blogLayoutMain]'
})
export class BlogLayoutMainDirective {
    @HostBinding('class') private cls = 'isDefault';
    @HostListener('window:scroll', ['$event'])
    onScroll(){
      const windowScroll = window.pageYOffset;
      const isScrolled = windowScroll > 16;
      this.cls = isScrolled ? 'isScrolabled' : 'isDefault'
    }
}
