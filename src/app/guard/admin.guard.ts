import { inject } from '@angular/core';
import { TokenService } from './../services/token.service';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuard: CanActivateFn = (route, state) => {
  const TokenSService = inject(TokenService);
  const router = inject(Router);

  if (TokenSService.isAdmin()) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
