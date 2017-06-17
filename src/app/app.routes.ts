import { Routes, RouterModule, LoadChildrenCallback } from '@angular/router';
import { CarsLoginComponent } from './cars-login/cars-login.component';
import { CarsNotFoundComponent } from './cars-not-found/cars-not-found.component';

export const routes: Routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: CarsLoginComponent
},
{
  path: 'not-found',
  component: CarsNotFoundComponent
},
{
  path: '**',
  redirectTo: '/not-found'
}];

export const routing = RouterModule.forRoot(routes);
