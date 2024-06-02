import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutTrainerComponent } from '../trainer/component/about-trainer/about-trainer.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AboutTrainerComponent
  ],
  imports: [
    CommonModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
