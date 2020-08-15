import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquiposInfoPageRoutingModule } from './equipos-info-routing.module';

import { EquiposInfoPage } from './equipos-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquiposInfoPageRoutingModule
  ],
  declarations: [EquiposInfoPage]
})
export class EquiposInfoPageModule {}
