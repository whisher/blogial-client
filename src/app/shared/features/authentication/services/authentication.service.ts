import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { URLS } from '../../../../config/config.tokens';
import { HttpErrorHandler } from '../../../../shared/http/http-error-handler';

import {
  Authenticate,
  AuthenticationToken,
  Account
} from '../models/authentication.model';

@Injectable()
export class AuthenticationService {
  urlAccount: string;
  urlLogin: string;
  constructor(
    private http: HttpClient,
    @Inject(URLS) private urls
  ) {
    this.urlAccount = urls.authentication.account;
    this.urlLogin = urls.authentication.login;
  }

  login(data: Authenticate): Observable<AuthenticationToken> {
    return this.http.post<AuthenticationToken>(this.urlLogin, data)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  account(): Observable<Account>{
    return this.http.get<Account>(this.urlAccount)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }
}
