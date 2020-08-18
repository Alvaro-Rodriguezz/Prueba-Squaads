import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresListPageRoutingModule } from './jugadores-list-routing.module';

import { JugadoresListPage } from './jugadores-list.page';
import { JugadoresPipePipe } from './jugadores-pipe.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresListPageRoutingModule
  ],
  declarations: [JugadoresListPage, JugadoresPipePipe]
})
export class JugadoresListPageModule {}
