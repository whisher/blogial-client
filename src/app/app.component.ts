import { Component } from '@angular/core';

import { PwaService } from './shared/pwa/pwa.service';
@Component({
  selector: 'iwdf-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
  constructor(private pwa: PwaService){}
}
