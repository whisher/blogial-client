import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';

import { Observable, of } from 'rxjs';

import { take, map } from 'rxjs/operators';

import { Store } from '@ngrx/store';


import * as fromAuthentication from '../store';

@Injectable()
export class RoleGuard implements CanActivate, CanLoad {
  private admittedRoles = ['admin'];
  constructor(
    private store: Store<fromAuthentication.State>
  ) {}

  canActivate(): Observable<boolean> {
    return this.store.select(fromAuthentication.getAccount)
      .pipe(
      map(account => {
        return this.admittedRoles.indexOf(account.role) !== -1;
      }),
      take(1)
      );
  }

  canLoad(): Observable<boolean> {
    return this.store.select(fromAuthentication.getAccount)
      .pipe(
      map(account => {
        return this.admittedRoles.indexOf(account.role) !== -1;
      }),
      take(1)
      );
  }
}
