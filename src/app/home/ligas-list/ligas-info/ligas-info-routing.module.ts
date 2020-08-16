import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigasInfoPage } from './ligas-info.page';

const routes: Routes = [
  {
    path: '',
    component: LigasInfoPage
  },
  {
    path: ':nombre',
    loadChildren: () => import('./liga-equipos/liga-equipos.module').then(m => m.LigaEquiposPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigasInfoPageRoutingModule {}
