import { Injectable } from '@angular/core';

import { PrincipalService } from './principal.service';
import { AuthJWTService } from './auth-jwt.service';
import { EventKeys } from '@constants';
import { EventManager } from '../services/event-manager.service';

@Injectable()
export class LoginService {

  constructor(
    private principalService: PrincipalService,
    private authJWTService: AuthJWTService,
    private eventManager: EventManager,
  ) { }

  login(credentials: any) {
    return new Promise((resolve, reject) => {
      this.authJWTService.login(credentials).subscribe(data => {
        this.eventManager.broadcast({ name: EventKeys.AUTH_SUCCESS });
        resolve(data);
      }, (err) => {
        this.logout();
        reject(err);
      });
    });
  }

  logout() {
    this.authJWTService.logout();
    this.principalService.authenticate(null);
    this.eventManager.broadcast({ name: EventKeys.AUTH_SIGNED_OUT });
  }
}
