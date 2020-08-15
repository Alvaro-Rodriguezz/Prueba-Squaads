import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LigasAddPage } from './ligas-add.page';

const routes: Routes = [
  {
    path: '',
    component: LigasAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LigasAddPageRoutingModule {}
