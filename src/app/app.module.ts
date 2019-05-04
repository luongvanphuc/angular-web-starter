import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppInitializerModule } from '@shared/app-initializer/app-initializer.module';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent, HeaderComponent, FooterComponent } from './layout';
import { EntityModule } from '@entities/entities.module';
import { SharedModule } from '@shared/shared.module';
import { GlobalServices } from '@services';
import { AuthJWTService } from '@auth/auth-jwt.service';
import { AuthInterceptor } from '@interceptors';
import { ErrorModule } from './error/error.module';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppInitializerModule,
    EntityModule,
    SharedModule,
    ErrorModule,
  ],
  providers: [
    ...GlobalServices,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [
        AuthJWTService,
      ],
    },
  ],
  bootstrap: [MainComponent],
})
export class AppModule { }
