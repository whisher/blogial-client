import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { URLS } from '../../../../config/config.tokens';
import { HttpErrorHandler } from '../../../http/http-error-handler';
import { Post } from '../models';

@Injectable()
export class PostsService {
  postsUrl: string;
  pwaNotificationUrl: string;
  constructor(
    private http: HttpClient,
    @Inject(URLS) private urls
  ) {
    this.postsUrl = urls.posts;
    this.pwaNotificationUrl = urls.pwa.notification;
  }

  add(data): Observable<Post> {
    const { title, content, isDraft, image, places, files } = data;
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('isDraft', isDraft);
    postData.append('image', image, title);
    postData.append('places', JSON.stringify(places));
    postData.append('files', JSON.stringify(files));
    return this.http.post<Post>(this.postsUrl, postData)
   .pipe(
     tap(data => this.notification(data).subscribe()),
     catchError((error: any) => HttpErrorHandler.handle(error))
   );
  }

  gallery(file, name): Observable<{src: string, name: string}> {
    const postData = new FormData();
    postData.append('gallery', file, name);
    return this.http.post<{src: string, name: string}>(`${this.postsUrl}/gallery`, postData)
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

  update(id: string, data): Observable<Post> {
    const { title, content, isDraft, image, places, files } = data;
    const postData = new FormData();
    postData.append('title', title);
    postData.append('content', content);
    postData.append('isDraft', isDraft);
    postData.append('image', image, title);
    postData.append('places', JSON.stringify(places));
    postData.append('files', JSON.stringify(files));
    return this.http.put<Post>(`${this.postsUrl}/${id}`, postData)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  delete(id: string): Observable<Post> {
    return this.http.delete<Post>(`${this.postsUrl}/${id}`)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  notification(data: Post): Observable<any> {
    console.log('pippo',data);
    return this.http.post<any>(`${this.pwaNotificationUrl}`, data)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }
}
