import { Directive, Inject, HostListener } from '@angular/core';
import { WINDOW } from './window.service';

@Directive({
  selector: '[uiGoToTop]'
})
export class UiGoToTopDirective {
  @HostListener('click', ['$event']) onClick($event){
    this.window.scrollTo(0, 0);
  }
  constructor(
    @Inject(WINDOW) private window
  ) { }

}
