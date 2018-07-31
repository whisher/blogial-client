import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { take, map, switchMap } from 'rxjs/operators';

import {
  AuthenticationToken
} from '../../models/authentication.model';
import * as fromRootStore from '../../../../store';
import * as fromStore from '../store';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<fromRootStore.State>
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select(fromStore.getToken)
      .pipe(
        take(1),
        switchMap((token: AuthenticationToken) => {
          console.log('token',token);
          if (token) {
            const clonedRequest = request.clone({
              setHeaders: {
                Authorization: `Bearer ${token.token}`
              }
            });
            return next.handle(clonedRequest);
          }
          return next.handle(request);
        })

      );
  }
}
