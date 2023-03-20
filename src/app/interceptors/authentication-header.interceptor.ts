import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationHeaderInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let idToken = localStorage.getItem('idToken') as string;
    const requestClone = request.clone({
      headers: request.headers.set('idToken', idToken)
    });
    
    return next.handle(requestClone);
  }
}
