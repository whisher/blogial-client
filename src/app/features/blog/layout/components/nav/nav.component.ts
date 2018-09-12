import { Component, Input, Attribute, ChangeDetectionStrategy } from '@angular/core';

export type CustomNavClass = '' | 'header' | 'footer';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-layout-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  host: {
    '[class]' : 'cls'
  }
})
export class BlogLayoutNavComponent{
  @Input() isLoggedIn: boolean;
  constructor(@Attribute('cls') public cls: CustomNavClass = '') { }
}
