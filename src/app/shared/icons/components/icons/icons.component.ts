import { Component } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'iwdf-icon-fa-user',
  template: `<fa-icon [icon]="faUser"></fa-icon>`,
  styles: [`:host {
    display: inline-block;
  }`]
})
export class IconFaUserComponent{
  faUser = faUser;
}
