import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-layout-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class BlogLayoutNavComponent{
  @Input() isLoggedIn: boolean;
}
