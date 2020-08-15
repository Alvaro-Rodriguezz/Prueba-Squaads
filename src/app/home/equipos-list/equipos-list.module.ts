import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquiposListPageRoutingModule } from './equipos-list-routing.module';

import { EquiposListPage } from './equipos-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquiposListPageRoutingModule
  ],
  declarations: [EquiposListPage]
})
export class EquiposListPageModule {}
