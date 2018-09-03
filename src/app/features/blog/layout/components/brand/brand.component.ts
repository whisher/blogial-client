import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-layout-brand',
  template: `
    <a routerLink="">
      <img src="/assets/images/logo.png" alt="">
    </a>
  `,
  styles: [ `
    img{
      width: 6rem;
    }
  `
  ]
})
export class BlogLayoutBrandComponent {}
