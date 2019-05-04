import { EventManager } from './event-manager.service';
import { WindowRef } from './window.service';
import { PrincipalService } from '@auth/principal.service';
import { AuthJWTService } from '@auth/auth-jwt.service';
import { StateStorageService } from '@auth/state-storage.service';

export {
  WindowRef,
  EventManager,
  PrincipalService,
  StateStorageService,
};

// to use spead operator in shared-common.module.ts file
export const Services = [
  WindowRef,
  AuthJWTService,
  StateStorageService,
];

export const GlobalServices = [
  EventManager,
  PrincipalService,
];
