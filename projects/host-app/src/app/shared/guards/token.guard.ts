import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";

export const AuthGuard = async (next: ActivatedRouteSnapshot) => {
  const router = inject(Router);
  const { token } = next.queryParams;
  
  const stored = token || sessionStorage.getItem('token');
  
  if(!stored) {
    return false;
  }

  if(stored) {
    sessionStorage.setItem('token', stored);
    return true;
  }

  return false;
}