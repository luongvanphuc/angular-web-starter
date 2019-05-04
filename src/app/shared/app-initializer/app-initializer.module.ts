import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppInitializerService } from './app-initializer.service';

export function initializeApp(appLoadService: AppInitializerService) {
  return () => appLoadService.initializeApp();
}

@NgModule({
  imports: [HttpClientModule],
  providers: [
    AppInitializerService,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitializerService], multi: true },
  ],
})
export class AppInitializerModule { }
