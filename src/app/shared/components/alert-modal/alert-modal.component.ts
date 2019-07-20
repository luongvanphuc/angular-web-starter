import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AlertModalDataModel } from './alert-modal.model';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss'],
})
export class AlertModalComponent implements OnInit {
  @Input() data: AlertModalDataModel;

  title = '';
  content = '';
  buttonLabel = 'OK';

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    if (this.data) {
      this.title = this.data.title || this.title;
      this.content = this.data.content || this.content;
      this.buttonLabel = this.data.buttonLabel || this.buttonLabel;
    }
  }

  submit() {
    this.activeModal.close();
  }
}
