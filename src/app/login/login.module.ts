import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from './login.component';
import { loginRoute } from './login.route';

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([loginRoute]),
  ],
})
export class LoginModule { }
