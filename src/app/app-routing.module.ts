import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './user/component/landing-page/landing-page.component';
import { DashboardComponent } from './user/component/dashboard/dashboard.component';
import { HomeComponent } from './user/component/home/home.component';
import { LoginRegistrationComponent } from './user/auth/login-registration/login-registration.component';
import { GymsComponent } from './user/tabs/gyms/gyms.component';
import { TrainerComponent } from './user/tabs/trainer/trainer.component';
import { GymPreviewComponent } from './user/view-page/gym-preview/gym-preview.component';
import { TrainerPreviewComponent } from './user/view-page/trainer-preview/trainer-preview.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent, title:'GoFit'},
  {path:'login-register',component:LoginRegistrationComponent,title:'Login Registration'},
  {path:'dashboard',component:DashboardComponent,title:'Dashboard',children:[
    {path:'',component:HomeComponent,},
    {path:'gyms',component:GymsComponent,title:'GYM'},
    {path:'trainers',component:TrainerComponent,title:'TRAINER'},
    {path:'gym-preview',component:GymPreviewComponent,title:'Gym Preview'},
    {path:'trainer-preview',component:TrainerPreviewComponent,title:'Trainer Preview'},
    
  ]},
  {path:'home',component:HomeComponent,title:'home'},

  { path: 'vendor', loadChildren: () => import('./vendor/vendor.module').then(m => m.VendorModule) },
  { path: '', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule) }, 
  { path: '', loadChildren: () => import('./gym/gym.module').then(m => m.GymModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
