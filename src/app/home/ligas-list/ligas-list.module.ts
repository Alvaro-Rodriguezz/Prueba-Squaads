import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LigasListPageRoutingModule } from './ligas-list-routing.module';

import { LigasListPage } from './ligas-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LigasListPageRoutingModule
  ],
  declarations: [LigasListPage]
})
export class LigasListPageModule {}
