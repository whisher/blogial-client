import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faArrowLeft,
  faBell,
  faEnvelope,
  faEye,
  faEyeSlash,
  faImage,
  faImages,
  faKey,
  faMinus,
  faPlus,
  faTable,
  faThList
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAngleDown,
  faArrowLeft,
  faBell,
  faEnvelope,
  faEye,
  faEyeSlash,
  faImage,
  faImages,
  faKey,
  faMinus,
  faPlus,
  faTable,
  faThList
);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-angledown',
  template: `<fa-icon [icon]="['fas', 'angle-down']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconAngleDownComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-arrowleft',
  template: `<fa-icon [icon]="['fas', 'arrow-left']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconArrowLeftComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-bell',
  template: `<fa-icon class="{{cls}}" [icon]="['fas', 'bell']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconBellComponent {
  @Input() cls: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-envelope',
  template: `<fa-icon [icon]="['fas', 'envelope']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconEnvelopeComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-eye',
  template: `<fa-icon [icon]="['fas', 'eye']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconEyeComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-eyeslash',
  template: `<fa-icon [icon]="['fas', 'eye-slash']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconEyeSlashComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-image',
  template: `<fa-icon class="{{cls}}" [icon]="['fas', 'image']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconImageComponent {
  @Input() cls: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-images',
  template: `<fa-icon class="{{cls}}" [icon]="['fas', 'images']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconImagesComponent {
  @Input() cls: string;
}


@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-key',
  template: `<fa-icon [icon]="['fas', 'key']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconKeyComponent{}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-minus',
  template: `<fa-icon class="{{cls}}" [icon]="['fas', 'minus']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconMinusComponent {
  @Input() cls: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-plus',
  template: `<fa-icon class="{{cls}}" [icon]="['fas', 'plus']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconPlusComponent{
  @Input() cls: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-table',
  template: `<fa-icon class="{{cls}}" [icon]="['fas', 'table']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconTableComponent{
  @Input() cls: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-th-list',
  template: `<fa-icon class="{{cls}}" [icon]="['fas', 'th-list']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconThListComponent{
  @Input() cls: string;
}
