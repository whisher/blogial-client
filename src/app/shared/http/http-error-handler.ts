import { environment } from '../../../environments/environment';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';

export class HttpErrorHandler {
  static handle(error: HttpErrorResponse) {
    const msg = (environment.production ||  !error.message) ? 'Something bad happened; please try again later.' : error.message;
    return throwError(msg);
  }
}
