import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromAuthentication from '../../../../../core/authentication/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-layout-footer',
  template: `
  <div>
    <blog-layout-nav cls="footer" [isLoggedIn]="isValidToken$ | async"></blog-layout-nav>
    <p class="text-muted text-center my-2">&#169;Blogial - 2018</p>
  </div>`,
  styles: [`
    :host{
      display: block;
      height: 100%;
      background-color: inherit;
    }
  `]
})
export class BlogLayoutFooterComponent {
  isValidToken$ = this.store.pipe(select(fromAuthentication.isValidToken));
  constructor(
    private store: Store<fromAuthentication.State>
  ) {}
}
