import { Component } from '@angular/core';

import { PwaService } from './shared/pwa/pwa.service';

@Component({
  selector: 'iwdf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  canInstallPwa = this.pwa.promptEvent;
  constructor(private pwa: PwaService){}
  installPwa(): void {
    this.pwa.install();
  }
}
