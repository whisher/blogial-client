import { Component, ChangeDetectionStrategy} from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromAuthentication from '../../../../../core/authentication/store';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-dashboard-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class AdminDashboardMainComponent {
  account$ = this.store.select(fromAuthentication.getAccount)
  constructor(private store: Store<fromAuthentication.State>) {}

}
