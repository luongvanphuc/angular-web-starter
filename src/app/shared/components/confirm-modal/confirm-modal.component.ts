import { Component, Input, OnInit } from '@angular/core';

import { ConfirmModalDataModel } from './confirm-modal.model';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  @Input() data: ConfirmModalDataModel;

  title = '';
  content = '';
  yesButtonLabel = 'Yes';
  noButtonLabel = 'No';
  yesButtonClass = '';
  noButtonClass = '';

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title || this.title;
      this.content = this.data.content || this.content;
      this.yesButtonLabel = this.data.yesButtonLabel || this.yesButtonLabel;
      this.noButtonLabel = this.data.noButtonLabel || this.noButtonLabel;
      this.yesButtonClass = this.data.yesButtonClass || this.yesButtonClass;
      this.noButtonClass = this.data.noButtonClass || this.noButtonClass;
    }
  }

  close() {
    this.modalService.close();
  }

  submit() {
    this.modalService.submit();
  }
}
