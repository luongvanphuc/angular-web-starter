import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import { SharedCommonModule } from './shared-common.module';

@NgModule({
  imports: [
    SharedCommonModule,
  ],
  declarations: [
  ],
  providers: [
    DatePipe,
  ],
  exports: [
    SharedCommonModule,
    DatePipe,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule { }
