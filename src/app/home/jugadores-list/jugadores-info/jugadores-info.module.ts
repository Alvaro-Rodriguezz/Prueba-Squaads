import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresInfoPageRoutingModule } from './jugadores-info-routing.module';

import { JugadoresInfoPage } from './jugadores-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresInfoPageRoutingModule
  ],
  declarations: [JugadoresInfoPage]
})
export class JugadoresInfoPageModule {}
