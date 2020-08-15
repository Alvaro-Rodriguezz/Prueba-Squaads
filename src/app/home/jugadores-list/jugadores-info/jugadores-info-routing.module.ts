import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadoresInfoPage } from './jugadores-info.page';

const routes: Routes = [
  {
    path: '',
    component: JugadoresInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadoresInfoPageRoutingModule {}
