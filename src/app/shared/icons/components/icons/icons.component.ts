import { Component, ChangeDetectionStrategy } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faKey
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faEnvelope,
  faEye,
  faEyeSlash,
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
  selector: 'iwdf-icon-eye',
  template: `<fa-icon [icon]="['fas', 'eye']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconEyeComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-icon-eyeslash',
  template: `<fa-icon [icon]="['fas', 'eye-slash']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconEyeSlashComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-icon-key',
  template: `<fa-icon [icon]="['fas', 'key']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconKeyComponent{}
