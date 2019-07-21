import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { HomepageComponent } from './homepage.component';
import { homepageRoute } from './homepage.route';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([homepageRoute]),
  ],
  declarations: [
    HomepageComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomepageModule { }
