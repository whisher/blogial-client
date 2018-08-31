import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faAngleDown,
  faArrowLeft,
  faBell,
  faEdit,
  faEnvelope,
  faEye,
  faEyeSlash,
  faFileUpload,
  faImage,
  faImages,
  faKey,
  faMinus,
  faPlus,
  faSearch,
  faTable,
  faThList,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faAngleDown,
  faArrowLeft,
  faBell,
  faEdit,
  faEnvelope,
  faEye,
  faEyeSlash,
  faFileUpload,
  faImage,
  faImages,
  faKey,
  faMinus,
  faPlus,
  faSearch,
  faTable,
  faThList,
  faTrash
);

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-angledown',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'angle-down']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconAngleDownComponent{
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-arrowleft',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'arrow-left']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconArrowLeftComponent {
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-bell',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'bell']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconBellComponent {
  @Input() cls: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-edit',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'edit']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconEditComponent {
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-envelope',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'envelope']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconEnvelopeComponent {
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-eye',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'eye']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconEyeComponent {
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-file-upload',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'file-upload']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconFileUploadComponent {
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-eyeslash',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'eye-slash']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconEyeSlashComponent {
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-image',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'image']"></fa-icon>`,
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
  template: `<fa-icon [className]="cls" [icon]="['fas', 'images']"></fa-icon>`,
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
  template: `<fa-icon [className]="cls" [icon]="['fas', 'key']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconKeyComponent {
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-minus',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'minus']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconMinusComponent {
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-plus',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'plus']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconPlusComponent{
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-search',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'search']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconSearchComponent{
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-table',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'table']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconTableComponent{
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-th-list',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'th-list']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconThListComponent{
  @Input() cls: string = '';
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-trash',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'trash']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconTrashComponent{
  @Input() cls: string = '';
}
