import { Injectable } from '@angular/core';
import { SwUpdate, SwPush } from '@angular/service-worker';

import { Subscription, interval } from 'rxjs';

import { environment } from '../../../environments/environment';

import { PlatformService } from '../platform/platform.service';

type ServiceWorkerEvent = any;

@Injectable({
  providedIn: 'root'
})
export class PwaInstallService {
  promptEvent: ServiceWorkerEvent;
  interval: Subscription;
  constructor(
    private swUpdate: SwUpdate,
    private platform: PlatformService) {}

  install(): void {
    if(this.promptEvent){
      this.promptEvent.prompt();
    }
  }

  checkForUpdate(){
    console.log('checkForUpdate');
    if(environment.production){
      this.swUpdate.available.subscribe(event =>  {
        console.log('current version is', event.current);
        console.log('available version is', event.available);
        if(this.platform.isBrowser()) {
          if (window.confirm('Want to update?')) {
            this.interval.unsubscribe();
            this.swUpdate.activateUpdate().then(() => {
              console.log('Update');
              document.location.reload();
            });
          }
        }
      });
      this.swUpdate.activated.subscribe(event => {
        console.log('old version was', event.previous);
        console.log('new version is', event.current);
      });
      if(this.platform.isBrowser()) {
        window.addEventListener('beforeinstallprompt', event => {
          this.promptEvent = event;
        });
        this.install();
      }
      this.interval = interval(6 * 60 * 60).subscribe(() => this.swUpdate.checkForUpdate());
    }
  }
}
