import { CookieService } from 'ngx-cookie-service';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const cookieService = inject(CookieService);
  const router = inject(Router);

  console.log('===>cookies desde guard', cookieService.getAll());
  if (!cookieService.check('session')) {
    console.log('Login requerido.No tienes permiso');
    return router.navigate(['/', 'login']);
  }
  return true;
};
