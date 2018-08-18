import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwPush } from '@angular/service-worker';

import { environment } from '../../../environments/environment';

import { VAPID_PUBLIC } from '../../config/pwa';
import { URLS } from '../../config/config.tokens';

import { HttpErrorHandler } from '../http/http-error-handler';

@Injectable({
  providedIn: 'root'
})
export class PwaNotificationService {
  urlSubscription: string;
  constructor(
    private swPush: SwPush,
    private http: HttpClient,
    @Inject(URLS) private urls
  ) {
    this.urlSubscription = urls.pwa.subscription;
  }

  askForPermission() {
    if (environment.production && this.swPush.isEnabled) {
      this.swPush
        .requestSubscription({
          serverPublicKey: VAPID_PUBLIC
        })
        .then(subscription => {
          this.sendSubscription(subscription).subscribe();
        })
        .catch(console.error);
    }
  }

  private sendSubscription(subscription: PushSubscription) {
    return this.http.post(this.urlSubscription, subscription);
  }
}
