import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppInitializerModule } from '@shared/app-initializer/app-initializer.module';
import { EntityModule } from '@entities/entities.module';
import { SharedModule } from '@shared/shared.module';
import { AuthJWTService } from '@auth/auth-jwt.service';
import { AuthInterceptor } from '@interceptors';
import { ErrorModule } from './error/error.module';
import { LayoutModule } from './layout/layout.module';
import { HomepageModule } from './homepage/homepage.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot([], { preloadingStrategy: PreloadAllModules }),
    BrowserModule,
    AppInitializerModule,
    LayoutModule,
    EntityModule,
    SharedModule,
    ErrorModule,
    HomepageModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
      deps: [
        AuthJWTService,
      ],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
