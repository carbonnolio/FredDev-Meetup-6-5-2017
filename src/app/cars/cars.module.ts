import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CarsHeaderComponent } from './cars-header/cars-header.component';
import { CarsRootComponent } from './cars-root/cars-root.component';
import { CarsContainerComponent } from './cars-container/cars-container.component';
import { CarsFooterComponent } from './cars-footer/cars-footer.component';
import { CarGridComponent } from './car-elements/car-grid/car-grid.component';
import { CarService } from '../car-services/car.service';
import { CarGridRowComponent } from './car-elements/car-grid-row/car-grid-row.component';
import { ShoppingCartComponent } from './car-elements/shopping-cart/shopping-cart.component';
import { DataService } from './../car-services/data.service';
import { ShopService } from '../car-services/shop.service';

import { routing } from './cars.routes';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    routing
  ],
  exports: [
    CarsRootComponent
  ],
  declarations: [CarsHeaderComponent, CarsRootComponent, CarsContainerComponent, CarsFooterComponent, CarGridComponent, CarGridRowComponent, ShoppingCartComponent],
  providers: [CarService, DataService, ShopService]
})
export class CarsModule { }
