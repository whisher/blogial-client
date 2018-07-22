import { Injectable } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string) {


  }

  isBrowser(): boolean{
    console.log(`Running ${this.platformId} with appId=${this.appId}`);
    return isPlatformBrowser(this.platformId)
  }
}
