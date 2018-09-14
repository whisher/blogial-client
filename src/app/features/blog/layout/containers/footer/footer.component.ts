import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromAuthentication from '../../../../../core/authentication/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-layout-footer',
  template: `
  <div class="row my-2">
    <div class="col-12 col-md-4">
      <blog-layout-nav cls="footer" [isLoggedIn]="isValidToken$ | async"></blog-layout-nav>
    </div>
      <div class="col-12 col-md-4">
        <ul class="d-flex flex-column align-items-center">
          <li><a href="#">Last posts</a></li>
        </ul>
      </div>
    <div class="col-12 col-md-4">
      <ul class="d-flex justify-content-end">
        <li class="pr-3">
          <a href="#" class="text-secondary h5">
            <icon-facebook cls="fa-lg"></icon-facebook>
          </a>
        </li>
        <li class="pr-3">
          <a href="#" class="text-secondary h5">
            <icon-twitter cls="fa-lg"></icon-twitter>
          </a>
        </li>
        <li>
          <a href="#" class="text-secondary h5">
            <icon-google-plus cls="fa-lg"></icon-google-plus>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <p class="text-muted text-center my-2">&#169;Blogial - 2018</p>
  `,
  styles: [`
    :host{
      display: block;
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
