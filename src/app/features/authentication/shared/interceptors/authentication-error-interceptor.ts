import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import * as fromAuthentication from '../../shared/store';


@Injectable()
export class AuthenticationErrorInterceptor implements HttpInterceptor {
  status = [401];
  constructor(private store: Store<fromAuthentication.State>){}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        catchError((error: HttpEvent<any>) => {
          if (error instanceof HttpErrorResponse) {
            if(this.status.indexOf(error.status) !== -1){
              this.store.dispatch(new fromAuthentication.Logout());
            }
          }
          return throwError(error);
        })
      );

    }
}
