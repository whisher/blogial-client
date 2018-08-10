import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { URLS } from '../../../../../config/config.tokens';
import { HttpErrorHandler } from '../../../../../shared/http/http-error-handler';
import { Post } from '../../models/post.model';

@Injectable()
export class PostsService {
  postsUrl: string;
  constructor(
    private http: HttpClient,
    @Inject(URLS) private urls
  ) {
    this.postsUrl = urls.posts;
  }

  add(data): Observable<Post> {
    const { title, content, isDraft, image } = data;
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('isDraft', isDraft);
    postData.append('image', image, title);
    return this.http.post<Post>(this.postsUrl, postData)
   .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  load(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  findById(id): Observable<Post> {
    return this.http.get<Post>(`${this.postsUrl}/${id}`)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  update(id: string, data: Post): Observable<Post> {
    return this.http.put<Post>(`${this.postsUrl}/${id}`, data)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  delete(id: string): Observable<Post> {
    return this.http.delete<Post>(`${this.postsUrl}/${id}`)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }
}
