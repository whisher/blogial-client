import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthenticationErrorInterceptor } from './authentication-error-interceptor';
import { AuthenticationInterceptor } from './authentication-interceptor';

export const interceptors = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthenticationErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true },
];
