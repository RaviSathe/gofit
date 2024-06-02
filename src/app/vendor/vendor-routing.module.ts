import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterVendorComponent } from './auth/register-vendor/register-vendor.component';
import { AboutTrainerComponent } from '../trainer/component/about-trainer/about-trainer.component';

const routes: Routes = [
  {path:'vendor-registration', component:RegisterVendorComponent},
  // {path:'about-trainer', component:AboutTrainerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
