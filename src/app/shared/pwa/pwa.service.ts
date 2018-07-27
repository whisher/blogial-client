import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { PlatformService } from '../platform/platform.service';

type ServiceWorkerEvent = any;

@Injectable({
  providedIn: 'root'
})
export class PwaService {
  //promptEvent: BeforeInstallPromptEvent;
  promptEvent: ServiceWorkerEvent;
  constructor(private swUpdate: SwUpdate, platform: PlatformService) {
    /*if(platform.isBrowser()){
      swUpdate.available.subscribe(event =>  {
        if (window.confirm('Want to update?')) {
          window.location.reload();
        }
      });
      window.addEventListener('beforeinstallprompt', event => {
        this.promptEvent = event;
      });
    }*/
  }

  install(): void {
    if(this.promptEvent){
      //this.promptEvent.prompt();
    }
  }
}
