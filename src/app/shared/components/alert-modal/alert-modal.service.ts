import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AlertModalComponent } from './alert-modal.component';
import { AlertModalDataModel } from './alert-modal.model';

@Injectable()

export class AlertModalService {

  private isOpen = false;

  constructor(
    private modalService: NgbModal,
  ) { }

  open(data?: AlertModalDataModel) {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;
    const modalRef = this.modalService.open(AlertModalComponent);

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
