import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as fromAuthentication from '../store';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private store: Store<fromAuthentication.State>) { }

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(fromAuthentication.getLoggedIn),
      map(authed => {
        if (authed) {
          this.store.dispatch(new fromAuthentication.LoginJustLogged());
          return false;
        }
        return true;
      }),
      take(1)
    );
  }
}
