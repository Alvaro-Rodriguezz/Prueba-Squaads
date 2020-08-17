import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquiposAddPageRoutingModule } from './equipos-add-routing.module';

import { EquiposAddPage } from './equipos-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquiposAddPageRoutingModule
  ],
  declarations: [EquiposAddPage]
})
export class EquiposAddPageModule {}
