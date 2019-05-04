import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { adminRoutes } from './admin.route';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(adminRoutes),
  ],
  declarations: [
    AdminComponent,
  ],
})
export class AdminModule { }
