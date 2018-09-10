import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Account } from '../../../../../core/authentication/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'admin-dashboard-welcome',
  template: `
    <div class="welcome">
      <div class="welcome-col">
        <div class="alert alert-light py-5" role="alert">
          <h3 class="alert-heading h2 text-center">Welcome</h3>
          <h4 class="alert-heading h3 text-center">
            {{account.firstname}} {{account.lastname}}
          </h4>
          <p class="text-center pt-3">
            <a class="btn btn-outline-info btn-lg" routerLink="/admin/posts/post">Insert a new post</a>
          </p>
        </div>
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item h4">
       Last login: {{account.last_login | date:'medium'}}
      </li>
    </ul>
  `,
  styles: [`
    :host{
      display: block;
    }
    .welcome {
      display: flex;
      margin-right: -15px;
      margin-left:  -15px;
    }
    .welcome-col{
      flex: 1 0 auto;
    }
  `]
})
export class AdminDashboardWelcomeComponent {
  @Input() account: Account;
}
