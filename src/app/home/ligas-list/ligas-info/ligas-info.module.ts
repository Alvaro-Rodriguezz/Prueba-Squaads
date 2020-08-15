import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LigasInfoPageRoutingModule } from './ligas-info-routing.module';

import { LigasInfoPage } from './ligas-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LigasInfoPageRoutingModule
  ],
  declarations: [LigasInfoPage]
})
export class LigasInfoPageModule {}
