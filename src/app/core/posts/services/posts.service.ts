import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { URLS } from '../../../config/config.tokens';
import { HttpErrorHandler } from '../../../shared/http/http-error-handler';
import { Post, Thumb, Image } from '../models';

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
    const { content, files, image, isDraft, places, title, tags } = data;
    const postData = new FormData();
    postData.append('content', content);
    postData.append('files', JSON.stringify(files));
    postData.append('isDraft', isDraft);
    postData.append('image', image, title);
    postData.append('places', JSON.stringify(places));
    postData.append('tags', JSON.stringify(tags));
    postData.append('title', title);
    return this.http.post<Post>(this.postsUrl, postData)
   .pipe(
     catchError((error: any) => HttpErrorHandler.handle(error))
   );
  }

  gallery(file, name): Observable<Image> {
    const postData = new FormData();
    postData.append('gallery', file, name);
    return this.http.post<Image>(`${this.postsUrl}/gallery`, postData)
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
    const { content, files, image, isDraft, places, title, tags } = data;
    const postData = new FormData();
    postData.append('content', content);
    postData.append('files', JSON.stringify(files));
    postData.append('isDraft', isDraft);
    postData.append('image', image, title);
    postData.append('places', JSON.stringify(places));
    postData.append('tags', JSON.stringify(tags));
    postData.append('title', title);
    return this.http.put<Post>(`${this.postsUrl}/${id}`, postData)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  delete(id: string): Observable<Post> {
    return this.http.delete<Post>(`${this.postsUrl}/${id}`)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }

  notification(data: Post): Observable<any> {
    return this.http.post<any>(`${this.pwaNotificationUrl}`, data)
    .pipe(catchError((error: any) => HttpErrorHandler.handle(error)));
  }
}
