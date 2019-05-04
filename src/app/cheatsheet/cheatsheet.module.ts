import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { CheatsheetComponent } from './cheatsheet.component';
import { cheatsheetRoute } from './cheatsheet.route';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([cheatsheetRoute]),
  ],
  declarations: [
    CheatsheetComponent,
  ],
  entryComponents: [
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CheatsheetModule { }
