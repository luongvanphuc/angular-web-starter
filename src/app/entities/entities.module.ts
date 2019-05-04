import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    UserModule,
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class EntityModule { }
