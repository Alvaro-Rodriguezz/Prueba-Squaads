import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugadoresAddPage } from './jugadores-add.page';

const routes: Routes = [
  {
    path: '',
    component: JugadoresAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugadoresAddPageRoutingModule {}
