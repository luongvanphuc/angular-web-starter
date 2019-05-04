import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { errorRoutes } from './error.route';
import { PageNotFoundComponent } from './404/404.component';
import { ErrorComponent } from './error.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(errorRoutes),
  ],
  declarations: [
    PageNotFoundComponent,
    ErrorComponent,
  ],
})
export class ErrorModule { }
