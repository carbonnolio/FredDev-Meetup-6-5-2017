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

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { loginReducer } from './core/reducers/login.reducer';

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
    NgbModule.forRoot(),
    StoreModule.provideStore({ login: loginReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    })
  ],
  providers: [LoginService, RemoteService],
  bootstrap: [AppComponent]
})

export class AppModule { }
