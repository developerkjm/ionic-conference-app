import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RealPropertyPage } from './real-property.page';

const routes: Routes = [
  {
    path: '',
    component: RealPropertyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RealPropertyPageRoutingModule {}
