import { inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { APP_CONST } from 'src/app/config/app-const.config';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  authService = inject(AuthService);

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //const params = new HttpParams().set(APP_CONST.accessTokenName, this.authService.getToken() )
    if (this.authService.isAuthenticated()) {
      const cloneReq = request.clone({
        setHeaders: {
          [APP_CONST.authHeaderName]: this.authService.getToken()
        }
      })
      return next.handle(cloneReq);
    }

    return next.handle(request);
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};
