import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbDateParserFormatter, NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';
import { NgxWebstorageModule } from 'ngx-webstorage';

import { NgbDateNativeAdapter, NgbDateFRParserFormatter } from './adapters';

@NgModule({
  imports: [
    RouterModule,
    NgbModule,
    NgxWebstorageModule.forRoot({ prefix: 'app', separator: '-', caseSensitive: true }),
  ],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: NgbDateNativeAdapter,
    }, {
      provide: NgbDateParserFormatter,
      useClass: NgbDateFRParserFormatter,
    },
  ],
  exports: [
    RouterModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    NgxWebstorageModule,
  ],
})
export class SharedLibsModule { }
