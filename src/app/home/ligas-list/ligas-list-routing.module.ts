import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigasListPage } from './ligas-list.page';

const routes: Routes = [
  {
    path: '',
    component: LigasListPage
  },
  {
    path: 'ligas-add',
    loadChildren: () => import('./ligas-add/ligas-add.module').then( m => m.LigasAddPageModule)
  },
  {
    path: ':info',
    loadChildren: () => import('./ligas-info/ligas-info.module').then( m => m.LigasInfoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigasListPageRoutingModule {}
