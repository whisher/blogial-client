import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class AuthenticationErrorInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request)
      .pipe(
        catchError((event: HttpEvent<any>) => {
          if (event instanceof HttpErrorResponse) {
            console.log('do something');
          }
          return throwError(event)
        })
      );

    }
}
