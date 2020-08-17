import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquiposAddPage } from './equipos-add.page';

const routes: Routes = [
  {
    path: '',
    component: EquiposAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquiposAddPageRoutingModule {}
