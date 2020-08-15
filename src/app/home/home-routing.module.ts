import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'jugadores-list',
    loadChildren: () => import('./jugadores-list/jugadores-list.module').then( m => m.JugadoresListPageModule)
  },
  {
    path: 'equipos-list',
    loadChildren: () => import('./equipos-list/equipos-list.module').then( m => m.EquiposListPageModule)
  },
  {
    path: 'ligas-list',
    loadChildren: () => import('./ligas-list/ligas-list.module').then( m => m.LigasListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
