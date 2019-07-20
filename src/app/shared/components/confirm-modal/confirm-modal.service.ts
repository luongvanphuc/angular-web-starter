import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmModalComponent } from './confirm-modal.component';
import { ConfirmModalDataModel } from './confirm-modal.model';

@Injectable()

export class ConfirmModalService {

  private isOpen = false;

  constructor(
    private modalService: NgbModal,
  ) { }

  open(data?: ConfirmModalDataModel) {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;
    const modalRef = this.modalService.open(ConfirmModalComponent);

    if (data) {
      modalRef.componentInstance.data = data;
    }

    modalRef.result.then(() => {
      this.isOpen = false;
    }, () => {
      this.isOpen = false;
    });

    return modalRef;
  }
}
