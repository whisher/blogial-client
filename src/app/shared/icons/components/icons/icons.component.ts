import { Component, Attribute, ChangeDetectionStrategy } from '@angular/core';

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
  faHome,
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
  faHome,
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string) { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'icon-home',
  template: `<fa-icon [className]="cls" [icon]="['fas', 'home']"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconHomeComponent {
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
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
  constructor(@Attribute('cls') public cls: string = '') { }
}
