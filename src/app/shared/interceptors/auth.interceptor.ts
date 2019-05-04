import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { API_ENDPOINT } from '@app-constant';
import { AuthJWTService } from '../auth/auth-jwt.service';

export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authJWTService: AuthJWTService,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request || !request.url || (/^http/.test(request.url) && !(API_ENDPOINT && request.url.startsWith(API_ENDPOINT)))) {
      return next.handle(request);
    }

    const token = this.authJWTService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
    }

    return next.handle(request);
  }
}
