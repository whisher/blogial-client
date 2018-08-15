import { Component } from '@angular/core';

import { PwaService } from './shared/pwa/pwa.service';
@Component({
  selector: 'iwdf-root',
  template: `<router-outlet></router-outlet>`,
  styles: [`
    :host {
      display: flex;
      flex: 1 0 auto;
      flex-direction: column;
      background: #fff;
    }
  `]
})
export class AppComponent {
  constructor(private pwa: PwaService){}
}
