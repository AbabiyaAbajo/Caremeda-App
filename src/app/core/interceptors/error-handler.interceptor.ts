import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as observable from 'rxjs';
import { Router } from '@angular/router';
import { UNAUTHORIZED, BAD_REQUEST, FORBIDDEN } from 'http-status-codes';

import { BroadcastService } from '@core/services/broadcast.service';
import { AuthService } from '@core/services/auth.service';
import { ToastService } from '@core/services/toast.service';

import { environment } from '@environments/environment';

/**
* Adds a default error handler to all requests.
*/
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private broadcastService: BroadcastService,
    private router: Router,
    private toastService: ToastService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(resp: HttpEvent<any>): Observable<HttpEvent<any>> {
    // if (!environment.production) {
    //   // Do something with the error
    //   this.logger.logError('Request error ' + JSON.stringify(response));
    // }

    if (resp instanceof HttpErrorResponse) {
      const httpErrorCode = resp['status'];

      switch (httpErrorCode) {
        case 401:
          if (this.authService.isLoggedIn()) {
            this.authService.logout();
          }

          this.router.navigate(['/']);
          break;
        case 403:
          this.router.navigate(['/login']);
          break;
        case 404:
          this.router.navigate(['/']);
          break;
        default:
          break;
      }

      // console.log(response);

      // this.toastr.error(response['error']['error']['message']);
      // this.toastService.show(response['error']['error']['message'], { classname: 'bg-danger', delay: 15000 });

      this.broadcastService.setErrorMsg(resp['error']['error']['message']);
      this.broadcastService.setWorking(false);
    }

    // switch (httpErrorCode) {
    //   case UNAUTHORIZED:
    //     this.router.navigateByUrl('/auth/login');
    //     break;
    //
    //   case FORBIDDEN:
    //     this.router.navigateByUrl('/auth/403');
    //     break;
    //   // case BAD_REQUEST:
    //   //    this.showError(error.message);
    //   //     break;
    //   default:
    //
    //   // this.toasterService.pop('error', appToaster.errorHead, response['error']['error']['message']);
    // }


    // throw response;
    return observable.empty();
  }

}
