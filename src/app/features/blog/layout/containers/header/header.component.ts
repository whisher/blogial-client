import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Store, select } from '@ngrx/store';

import * as fromAuthentication from '../../../../../shared/features/authentication/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'blog-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class BlogLayoutHeaderComponent {
  isValidToken$ = this.store.pipe(select(fromAuthentication.isValidToken));
  constructor(
    private store: Store<fromAuthentication.State>
  ) {}
}
