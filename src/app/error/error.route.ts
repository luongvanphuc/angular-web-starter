import { Routes } from '@angular/router';

import { PageNotFoundComponent } from './404/404.component';
import { ErrorComponent } from './error.component';

export const errorRoutes: Routes = [
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'accessdenied',
    component: ErrorComponent,
    data: {
      authorities: [],
      error403: true,
    },
  },
];
