import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { URLS } from '../../../../../config/config.tokens';
import { HttpErrorHandler } from '../../../../../shared/http/http-error-handler';
import { Post } from '../../models/post.model';

@Injectable()
export class PostsService {
  urlCreate: string;
  urlFind: string;
  constructor(
    private http: HttpClient,
    @Inject(URLS) private urls
  ) {
    this.urlCreate = urls.posts.create;
    this.urlFind = urls.posts.find;
  }

  create(data: Post): Observable<Post> {
    return this.http.post<Post>(this.urlCreate, data)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  find(): Observable<Post[]> {
    return this.http.get<Post[]>(this.urlFind)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  findById(id): Observable<Post> {
    return this.http.get<Post>(`${this.urlFind}/${id}`)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  update(id: string, data: Post): Observable<Post> {
    return this.http.put<Post>(`${this.urlFind}/${id}`, data)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }
}
