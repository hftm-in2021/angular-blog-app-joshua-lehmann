import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {
  handleError(error: any): void {
    const message = error.message ? error.message : error.toString();
    if (environment.production) {
      window.location.href = '/error';
    } else {
      console.log('ERROR ->', message);
    }
  }
}
