import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRegistrationComponent } from './user/auth/login-registration/login-registration.component';
import { LandingPageComponent } from './user/component/landing-page/landing-page.component';
import { DashboardComponent } from './user/component/dashboard/dashboard.component';
import { AboutComponent } from './user/component/about/about.component';
import { ServiceComponent } from './user/component/service/service.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './user/component/home/home.component';
import { GymsComponent } from './user/tabs/gyms/gyms.component';
import { TrainerComponent } from './user/tabs/trainer/trainer.component';
import { GymPreviewComponent } from './user/view-page/gym-preview/gym-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginRegistrationComponent,
    LandingPageComponent,
    DashboardComponent,
    AboutComponent,
    ServiceComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GymsComponent,
    TrainerComponent,
    GymPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
