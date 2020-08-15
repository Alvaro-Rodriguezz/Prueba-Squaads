import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresListPageRoutingModule } from './jugadores-list-routing.module';

import { JugadoresListPage } from './jugadores-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresListPageRoutingModule
  ],
  declarations: [JugadoresListPage]
})
export class JugadoresListPageModule {}
