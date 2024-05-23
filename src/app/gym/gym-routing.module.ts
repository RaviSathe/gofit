import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './manager/registration/registration.component';
import { LoginRegistrationComponent } from './gym/auth/login-registration/login-registration.component';
import { DashboardComponent } from './gym/auth/dashboard/dashboard.component';
import { LandingpageComponent } from './gym/auth/landingpage/landingpage.component';
import { HomeComponent } from './gym/auth/home/home.component';

const routes: Routes = [
  {path:'', component: LandingpageComponent, title: 'Landing Page', children: [
    {path: 'manager-registration', component: RegistrationComponent, title: "Manager Registration" },
    {path: 'gym-registration' , component: LoginRegistrationComponent , title: "Gym"},
    {path: '' , component: DashboardComponent , title: "Dashboard", children:[
      {path: 'home' , component: HomeComponent , title: "Home"},
    ]},
    
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GymRoutingModule { }
