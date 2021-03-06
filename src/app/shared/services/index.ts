import { EventManager } from './event-manager.service';
import { WindowRef } from './window.service';
import { PrincipalService } from '../auth/principal.service';
import { AuthJWTService } from '../auth/auth-jwt.service';
import { StateStorageService } from '../auth/state-storage.service';
import { AlertModalService } from '../components/alert-modal/alert-modal.service';
import { ConfirmModalService } from '../components/confirm-modal/confirm-modal.service';
import { ModalService } from './modal.service';

export {
  EventManager,
  PrincipalService,
  WindowRef,
  StateStorageService,
  AlertModalService,
  ConfirmModalService,
  ModalService,
};

// to use spead operator in shared-common.module.ts file
export const Services = [
  EventManager,
  PrincipalService,
  WindowRef,
  AuthJWTService,
  StateStorageService,
  AlertModalService,
  ConfirmModalService,
  ModalService,
];
