import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigaEquiposPage } from './liga-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: LigaEquiposPage
  },
  {
    path: ':nombre',
    loadChildren: () => import('./equipos-add/equipos-add.module').then(m => m.EquiposAddPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigaEquiposPageRoutingModule {}
