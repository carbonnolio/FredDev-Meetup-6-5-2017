import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CarsModule } from './cars/cars.module';
import { CarsLoginComponent } from './cars-login/cars-login.component';

import { routing } from './app.routes';
import { CarsNotFoundComponent } from './cars-not-found/cars-not-found.component';

import { LoginService } from './car-services/login.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from '../core/reducers';
import { LoginEffects } from '../core/effects/login.effects';
import { RouterStoreModule } from '@ngrx/router-store';

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
    StoreModule.provideStore(reducer),
    RouterStoreModule.connectRouter(),
    EffectsModule.run(LoginEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})

export class AppModule { }
