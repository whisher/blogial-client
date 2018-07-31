import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as Authentication from '../store';
import * as fromAuth from '../../../../store';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private store: Store<fromAuth.State>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(Authentication.getLoggedIn),
      map(authed => {
        if (!authed) {
          this.store.dispatch(new Authentication.LoginRedirect());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
