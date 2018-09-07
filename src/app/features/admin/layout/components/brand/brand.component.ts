import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-brand',
  template: `
    <a routerLink="/main/dashboard">
      <img class="d-inline-block rounded-circle" src="/assets/images/logo.png" alt="">
    </a>
  `,
  styles: [`
    img{
      width: 5rem;
      margin-left: -7px;
    }
  `]
})
export class AdminLayoutBrandComponent {}
