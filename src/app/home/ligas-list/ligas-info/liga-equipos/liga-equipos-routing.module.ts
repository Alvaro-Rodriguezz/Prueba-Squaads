import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigaEquiposPage } from './liga-equipos.page';

const routes: Routes = [
  {
    path: '',
    component: LigaEquiposPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigaEquiposPageRoutingModule {}
