import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LigaEquiposPageRoutingModule } from './liga-equipos-routing.module';

import { LigaEquiposPage } from './liga-equipos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LigaEquiposPageRoutingModule
  ],
  declarations: [LigaEquiposPage]
})
export class LigaEquiposPageModule {}
