import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarsLoginComponent } from './cars-login/cars-login.component';

import { routing } from './app.routes';
import { CarsNotFoundComponent } from './cars-not-found/cars-not-found.component';

import { LoginService } from './car-services/login.service';
import { RemoteService } from './car-services/remote.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsLoginComponent,
    CarsNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CarsModule,
    ReactiveFormsModule,
    routing,
  ],
  providers: [LoginService, RemoteService],
  bootstrap: [AppComponent]
})

export class AppModule { }
