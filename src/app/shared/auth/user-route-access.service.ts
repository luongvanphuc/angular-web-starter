import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, CanLoad, Route } from '@angular/router';

import { PrincipalService } from './principal.service';
import { StateStorageService } from './state-storage.service';

@Injectable()
export class UserRouteAccessService implements CanActivate, CanLoad {

  constructor(
    private stateStorageService: StateStorageService,
    private principalService: PrincipalService,
    private router: Router,
  ) {
  }

  canLoad(route: Route): boolean | Promise<boolean> {
    const authorities = route.data ? route.data['authorities'] : [];
    return this.checkAuthority(authorities, route.path);
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> {
    const authorities = route.data['authorities'];
    return this.checkAuthority(authorities, state.url);
  }

  private checkAuthority(authorities: string[], url: string): Promise<boolean> {
    return new Promise(resolve => {
      // TODO: check authorities
      const user = this.principalService.getUserIdentity();

      if (user) {
        resolve(true);
      } else {
        this.stateStorageService.storeUrl(url);
        this.router.navigate(['/login']);
        resolve(false);
      }
    });
  }
}
