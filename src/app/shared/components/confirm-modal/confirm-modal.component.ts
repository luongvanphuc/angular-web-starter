import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ConfirmModalDataModel } from './confirm-modal.model';

@Component({
  selector: 'nj-confirm-modal',
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

  constructor(public activeModal: NgbActiveModal) { }

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

  submit() {
    this.activeModal.close('yes');
  }
}
