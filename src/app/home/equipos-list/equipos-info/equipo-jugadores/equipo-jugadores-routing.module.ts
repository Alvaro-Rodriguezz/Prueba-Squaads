import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipoJugadoresPage } from './equipo-jugadores.page';

const routes: Routes = [
  {
    path: '',
    component: EquipoJugadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipoJugadoresPageRoutingModule {}
