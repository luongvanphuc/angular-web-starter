import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import locale from '@angular/common/locales/en';

import { SharedLibsModule } from './shared-libs.module';
import { Services } from './services';
import { Components } from './components';
import { Directives } from './directives';
import { Pipes } from './pipes';

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
