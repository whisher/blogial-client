import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-layout-footer',
  template: `
  <div>
    <p class="text-muted m-0">&#169;Blogial - 2018</p>
  </div>`,
  styles: [`
    :host{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      background-color: #fff;
    }
  `]
})
export class BlogLayoutFooterComponent {}
