import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiposListPage } from './equipos-list.page';

const routes: Routes = [
  {
    path: '',
    component: EquiposListPage
  },
  {
    path: 'equipos-add',
    loadChildren: () => import('../ligas-list/ligas-info/liga-equipos/equipos-add/equipos-add.module').then(m => m.EquiposAddPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./equipos-info/equipos-info.module').then( m => m.EquiposInfoPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquiposListPageRoutingModule {}
