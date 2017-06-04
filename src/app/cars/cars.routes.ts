import { Routes, RouterModule } from '@angular/router';
import { CarsRootComponent } from './cars-root/cars-root.component';
import { LoginService } from './../car-services/login.service';

export const routes: Routes = [
    {
        path: 'cars',
        component: CarsRootComponent,
        canActivate: [LoginService]
    }
];

export const routing = RouterModule.forChild(routes);
