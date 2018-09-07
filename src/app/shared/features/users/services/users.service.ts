import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { URLS } from '../../../../config/config.tokens';
import { HttpErrorHandler } from '../../../http/http-error-handler';
import { User } from '../models';

@Injectable()
export class UsersService {
  usersUrl: string;
  constructor(
    private http: HttpClient,
    @Inject(URLS) private urls
  ) {
    this.usersUrl = urls.users;
  }

  add(data): Observable<User> {
    const { avatar, display_name, email, firstname, lastname, password, role } = data;
    const userData = new FormData();
    userData.append('avatar', avatar, display_name);
    userData.append('display_name', display_name);
    userData.append('email', email);
    userData.append('firstname', firstname);
    userData.append('lastname', lastname);
    userData.append('password', password);
    userData.append('role', role);
    return this.http.post<User>(this.usersUrl, userData)
   .pipe(
     catchError((error: any) => HttpErrorHandler.handle(error))
   );
  }

  load(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  findById(id): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  update(id: string, data): Observable<User> {
    const { avatar, display_name, email, firstname, lastname, password, role } = data;
    const userData = new FormData();
    userData.append('avatar', avatar, display_name);
    userData.append('display_name', display_name);
    userData.append('email', email);
    userData.append('firstname', firstname);
    userData.append('lastname', lastname);
    userData.append('password', password);
    userData.append('role', role);
    return this.http.put<User>(`${this.usersUrl}/${id}`, userData)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(`${this.usersUrl}/${id}`)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

}
