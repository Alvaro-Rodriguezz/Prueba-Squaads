import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LigasAddPageRoutingModule } from './ligas-add-routing.module';

import { LigasAddPage } from './ligas-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LigasAddPageRoutingModule
  ],
  declarations: [LigasAddPage]
})
export class LigasAddPageModule {}
