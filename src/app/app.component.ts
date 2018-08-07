import { Component } from '@angular/core';

import { PwaService } from './shared/pwa/pwa.service';
@Component({
  selector: 'iwdf-root',
  template: `<router-outlet></router-outlet>`,
  styles: [`
    :host {
      display: block;
      height: 100vh;
    }
  `]
})
export class AppComponent {
  constructor(private pwa: PwaService){}
}
