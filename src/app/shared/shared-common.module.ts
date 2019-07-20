import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import { SharedLibsModule } from './shared-libs.module';
import { Services } from './services';
import { Components } from './components';
import { Directives } from './directives';
import { Pipes } from './pipes';
import { AlertModalComponent } from '@components/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from '@components/confirm-modal/confirm-modal.component';

@NgModule({
  imports: [
    SharedLibsModule,
  ],
  declarations: [
    ...Pipes,
    ...Directives,
    ...Components,
  ],
  providers: [
    ...Services,
  ],
  entryComponents: [
    AlertModalComponent,
    ConfirmModalComponent,
  ],
  exports: [
    SharedLibsModule,
    ...Pipes,
    ...Directives,
    ...Components,
  ],
})
export class SharedCommonModule {
  constructor() {
    registerLocaleData(locale);
  }
}
