import { Component } from '@angular/core';

@Component({
  selector: 'iwdf-root',
  template: `<router-outlet></router-outlet>`,
  styles: [`
    :host {
      display: block;
      height: 100vh;
      width: 100%;
    }
  `]
})
export class AppComponent {}
