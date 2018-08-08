import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { take, map, switchMap } from 'rxjs/operators';

import {
  AuthenticationToken
} from '../../models/authentication.model';
import * as fromAuthentication from '../store';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(
    private store: Store<fromAuthentication.State>
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.store.select(fromAuthentication.getToken)
      .pipe(
        take(1),
        switchMap((token: AuthenticationToken) => {
          if (token) {
            const clonedRequest = request.clone({
              headers: request.headers.set('Authorization', token.token)
            });
            return next.handle(clonedRequest);
          }
          return next.handle(request);
        })

      );
  }
}
