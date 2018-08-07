import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faArrowLeft,
  faBell,
  faEnvelope,
  faEye,
  faEyeSlash,
  faKey
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAngleDown,
  faArrowLeft,
  faBell,
  faEnvelope,
  faEye,
  faEyeSlash,
  faKey
);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-icon-angledown',
  template: `<fa-icon [icon]="['fas', 'angle-down']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconAngleDownComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-icon-arrowleft',
  template: `<fa-icon [icon]="['fas', 'arrow-left']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconArrowLeftComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'iwdf-icon-bell',
  template: `<fa-icon class="{{cls}}" [icon]="['fas', 'bell']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconBellComponent{
  @Input() cls: string;
}

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
