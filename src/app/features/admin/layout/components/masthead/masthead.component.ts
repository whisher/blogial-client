import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-layout-masthead',
  template: `
    <ul>
      <li>
        <a routerLink="/home" class="text-body">
          <icon-home cls="fa-lg"></icon-home>
        </a>
      </li>
    </ul>
  `,
  styles: [`
    :host{
      display: flex;
      align-items: center;
      flex: 1 0 auto;
      padding-left: 1rem;
    }
  `]
})
export class AdminLayoutMastheadComponent {}
