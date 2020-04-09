import { Injectable } from '@angular/core';

import { ConfirmModalComponent } from './confirm-modal.component';
import { ConfirmModalDataModel } from './confirm-modal.model';
import { ModalService } from '../../services/modal.service';

@Injectable()
export class ConfirmModalService {

  constructor(private modalService: ModalService) { }

  open(data?: ConfirmModalDataModel) {
    const modalRef = this.modalService.open(ConfirmModalComponent, { centered: true }, data);
    return modalRef.result;
  }
}
