
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiposInfoPage } from './equipos-info.page';

const routes: Routes = [
  {
    path: '',
    component: EquiposInfoPage
  },
  {
    path: ':id',
    loadChildren: () => import('./equipo-jugadores/equipo-jugadores.module').then( m => m.EquipoJugadoresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquiposInfoPageRoutingModule {}
