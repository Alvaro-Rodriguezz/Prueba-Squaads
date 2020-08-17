import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugadoresAddPageRoutingModule } from './jugadores-add-routing.module';

import { JugadoresAddPage } from './jugadores-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugadoresAddPageRoutingModule
  ],
  declarations: [JugadoresAddPage]
})
export class JugadoresAddPageModule {}
