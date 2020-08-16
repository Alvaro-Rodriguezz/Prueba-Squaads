import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipoJugadoresPageRoutingModule } from './equipo-jugadores-routing.module';

import { EquipoJugadoresPage } from './equipo-jugadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipoJugadoresPageRoutingModule
  ],
  declarations: [EquipoJugadoresPage]
})
export class EquipoJugadoresPageModule {}
