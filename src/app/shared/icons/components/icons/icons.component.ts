import { Component, ChangeDetectionStrategy } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faKey,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelope,
  faKey
);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-icon-envelope',
  template: `<fa-icon [icon]="['fas', 'envelope']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconEnvelopeComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-icon-key',
  template: `<fa-icon [icon]="['fas', 'key']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconKeyComponent{}
