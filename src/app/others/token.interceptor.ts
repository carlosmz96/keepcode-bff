import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from '../services/login.service';

/**
 * Interceptor que añade el token en cada petición http
 */
export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token: string = inject(LoginService).getToken();

  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  return next(req);
};
