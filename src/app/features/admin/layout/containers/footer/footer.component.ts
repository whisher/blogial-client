import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-footer',
  template: `<div class="bg-white"><p class="text-muted text-center">&#169;Blogial - 2018</p></div>`,
  styles: [`
    :host {
      display: block;
    }
    p{
      margin-bottom: 0;
      line-height: 2.5;
    }
  `]
})
export class AdminLayoutFooterComponent {}
