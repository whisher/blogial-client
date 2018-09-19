import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger } from '@angular/animations';

import {
  PwaInstallService,
  PwaNotificationService
} from './shared/pwa';

@Component({
  selector: 'iwdf-root',
  template: `<div [@routeState]="getAnimationData(rOutlet)">
    <router-outlet #rOutlet="outlet"></router-outlet>
  </div>`,
  animations: [
    trigger('routeState', [
      transition('* <=> *', [
        group([
          query(':enter', [
            style({
              transform: 'translateX(-100%)'
            }),
            animate('500ms ease-out')
          ], {optional: true}),
          query(':leave', [
            animate('500ms ease-out', style({
              transform: 'translateX(100%)'
            }),)
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {
  constructor(
    pwaInstallService: PwaInstallService,
    pwaNotificationService: PwaNotificationService
  ){
    pwaInstallService.checkForUpdate();
    //pwaNotificationService.askForPermission();
  }
  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return '';
    }
    return routeData['page'];
  }
}
