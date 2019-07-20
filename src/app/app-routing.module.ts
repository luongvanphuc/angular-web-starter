import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Authorities } from '@constants';

const lazyRoutes: Routes = [
  {
    path: 'cheatsheet',
    loadChildren: () => import('./cheatsheet/cheatsheet.module').then(m => m.CheatsheetModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
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
