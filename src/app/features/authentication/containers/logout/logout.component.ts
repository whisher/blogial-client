import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iwdf-authentication-logout',
  template: `<p class="h1 text-white">Logging out...</p>`,
  styles: [`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }
  `]
})
export class AuthenticationLogoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
