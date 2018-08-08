import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { interval } from 'rxjs';

import { environment } from '../../../environments/environment';

import { PlatformService } from '../platform/platform.service';

type ServiceWorkerEvent = any;

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  promptEvent: ServiceWorkerEvent;
  constructor(private swUpdate: SwUpdate, platform: PlatformService) {
    console.log('platform.isBrowser()',platform.isBrowser());
    if(platform.isBrowser() && environment.production){
      console.log('hello browser');
      swUpdate.available.subscribe(event =>  {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
        if (window.confirm('Want to update?')) {
          swUpdate.activateUpdate().then(() => {
            console.log('Update');
            document.location.reload();
          });
        }
      });
      swUpdate.activated.subscribe(event => {
        console.log('old version was', event.previous);
        console.log('new version is', event.current);
      });
      window.addEventListener('beforeinstallprompt', event => {
        this.promptEvent = event;
      });
      this.install();
      interval(6 * 60 * 60).subscribe(() => swUpdate.checkForUpdate());
    }
  }

  install(): void {
    if(this.promptEvent){
      this.promptEvent.prompt();
    }
  }
}
