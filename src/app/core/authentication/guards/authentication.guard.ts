import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as fromAuthentication from '../store';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  constructor(private store: Store<fromAuthentication.State>) {
   }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuthentication.isValidToken),
      map(isValidToken => {
        if (!isValidToken) {
          this.store.dispatch(new fromAuthentication.LoginRedirect());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
