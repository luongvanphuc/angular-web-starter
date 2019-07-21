import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { MainComponent } from './main/main.component';
import { MainRootComponent } from './main-root/main-root.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    LayoutRoutingModule,
  ],
  exports: [],
  declarations: [
    MainComponent,
    MainRootComponent,
    FooterComponent,
    HeaderComponent,
  ],
})
export class LayoutModule { }
