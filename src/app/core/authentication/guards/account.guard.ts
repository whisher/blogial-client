import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Observable, of } from 'rxjs';

import { take, map, catchError, filter, switchMap, tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';


import * as fromAuthentication from '../store';

@Injectable()
export class AccountGuard implements CanActivate {
  constructor(
    private store: Store<fromAuthentication.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.select(fromAuthentication.getAccountLoaded)
      .pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromAuthentication.AccountRequested());
        }
      }),
      filter(loaded => loaded),
      take(1)
      );
  }
}
