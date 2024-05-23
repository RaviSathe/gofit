import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { RegistrationComponent } from './manager/registration/registration.component';
import { LoginRegistrationComponent } from './gym/auth/login-registration/login-registration.component';
import { DashboardComponent } from './gym/auth/dashboard/dashboard.component';
import { HomeComponent } from './gym/auth/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingpageComponent } from './gym/auth/landingpage/landingpage.component';


@NgModule({
  declarations: [
    RegistrationComponent,
    DashboardComponent,
    HomeComponent,
    LoginRegistrationComponent,
    LandingpageComponent
  ],
  imports: [
    CommonModule,
    GymRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GymModule { }
