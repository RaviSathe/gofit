import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './user/component/landing-page/landing-page.component';
import { DashboardComponent } from './user/component/dashboard/dashboard.component';
import { HomeComponent } from './user/component/home/home.component';
import { LoginRegistrationComponent } from './user/auth/login-registration/login-registration.component';

const routes: Routes = [
  {path:'', component:LandingPageComponent, title:'GoFit'},
  {path:'login-register',component:LoginRegistrationComponent,title:'Login Registration'},
  {path:'dashboard',component:DashboardComponent,title:'Dashboard'},
  {path:'home',component:HomeComponent,title:'home'},
  { path: '', loadChildren: () => import('./trainer/trainer.module').then(m => m.TrainerModule) }, 
  { path: 'gym', loadChildren: () => import('./gym/gym.module').then(m => m.GymModule) },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
