import { Component } from '@angular/core';


@Component({
  selector: 'authentication-layout-footer',
  template: `<footer><p class="text-muted text-center">&#169;Blogial - 2018</p></footer>`,
  styles: [`
    :host {
      display: block;
    }
    p{
      margin-bottom: 0;
      line-height: 2.5;
    }
  `]
})
export class AuthenticationLayoutFooterComponent {}
