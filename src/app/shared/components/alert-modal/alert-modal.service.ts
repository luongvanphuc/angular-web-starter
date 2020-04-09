import { Injectable } from '@angular/core';

import { AlertModalComponent } from './alert-modal.component';
import { AlertModalDataModel } from './alert-modal.model';
import { ModalService } from '../../services/modal.service';

@Injectable()

export class AlertModalService {

  constructor(private modalService: ModalService) { }

  open(data?: AlertModalDataModel) {
    return this.modalService.open(AlertModalComponent, { centered: true }, data);
  }
}
