import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealPropertyPageRoutingModule } from './real-property-routing.module';

import { RealPropertyPage } from './real-property.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealPropertyPageRoutingModule
  ],
  declarations: [RealPropertyPage]
})
export class RealPropertyPageModule {}
