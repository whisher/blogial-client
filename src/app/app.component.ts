import { Component } from '@angular/core';

import { PlatformService } from './app-platform.service';

@Component({
  selector: 'iwdf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iwdf';
  constructor(private platform:PlatformService){
    console.log(platform.isBrowser());
  }
}
