import { Injectable } from '@angular/core';

import { EventKeys } from '@constants';
import { EventManager } from '@services';
import { PrincipalService } from '@auth/principal.service';
import { AuthJWTService } from '@auth/auth-jwt.service';

@Injectable()
export class AppInitializerService {

  constructor(
    private principalService: PrincipalService,
    private authJWTService: AuthJWTService,
    private eventManager: EventManager,
  ) { }

  initializeApp(): Promise<any> {
    return new Promise(resolve => {
      const token = this.authJWTService.getToken();

      // login if user has saved token in either localStorage
      if (token) {
        this.principalService.identify().then(account => {
          if (account) {
            this.eventManager.broadcast({ name: EventKeys.AUTH_SUCCESS });
          }

          resolve();
        })
          .catch(() => {
            resolve();
          });
      } else {
        resolve();
      }
    });
  }
}
