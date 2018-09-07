import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-about-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class BlogAboutMainComponent {
  constructor() {}
}
