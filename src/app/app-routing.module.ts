import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Authorities } from '@constants';

const lazyRoutes: Routes = [
  {
    path: 'cheatsheet',
    loadChildren: './cheatsheet/cheatsheet.module#CheatsheetModule',
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule',
    data: {
      authorities: [Authorities.ADMIN],
    },
    canLoad: [
      // UserRouteAccessService
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(lazyRoutes, { useHash: false }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
