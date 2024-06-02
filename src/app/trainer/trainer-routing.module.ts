import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './component/landing-page/landing-page.component';
import { TrainerRegistrationComponent } from './auth/trainer-registration/trainer-registration.component';
// import { DashboardComponent } from './component/dashboard/dashboard.component';  
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AboutTrainerComponent } from './component/about-trainer/about-trainer.component';

const routes: Routes = [{ path: '', component:  LandingPageComponent, children:[
  {path:'trainer-registration-login' , component: TrainerRegistrationComponent , title: 'Trainer Registration'},
  {path:'t-dashboard', component: DashboardComponent , title:'Dashboard'},
  {path:'t-home', component: HomeComponent , title:'Home'},
  {path:'t-about', component: AboutComponent , title:'About'},
  {path:'about-trainer', component: AboutTrainerComponent , title:'About'}
  // {path:'' , component: DashboardComponent , children: [
  // ] },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainerRoutingModule { }
