import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainRootComponent } from './main-root/main-root.component';
import { MainComponent } from './main/main.component';

const lazyRoutes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      // { path: '', component: HomepageComponent, pathMatch: 'full' },
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('../homepage/homepage.module').then(m => m.HomepageModule),
      },
    ],
  },
  {
    path: '',
    component: MainRootComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then(m => m.LoginModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(lazyRoutes),
  ],
  exports: [RouterModule],
})
export class LayoutRoutingModule { }
