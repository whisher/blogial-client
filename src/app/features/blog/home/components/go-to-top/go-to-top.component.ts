import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-home-go-to-top',
  template: `
  <ui-fab-button [cls]="'c-btn-fab--light'">
    <icon-angleup cls="fa-2x"></icon-angleup>
  </ui-fab-button>
  `,
  styles: [`
    :host{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `]
})
export class BlogHomeGoToTopComponent {}
