import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';

import { Car } from '../interfaces/car';

import { ShopService } from '../../car-services/shop.service';

import { CarState } from '../../../core/reducers';

@Component({
  selector: 'cars-container',
  templateUrl: './cars-container.component.html',
  styleUrls: ['./cars-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsContainerComponent implements OnInit {

  @Input()
  carState: CarState;

  @Output()
  onAdd: EventEmitter<Car> = new EventEmitter();

  @Output()
  onRemove: EventEmitter<Car> = new EventEmitter();

  private originalCarlist: Car[];

  private carList: Car[];

  private purchasedCars: Car[] = [];

  private total = 0;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
  }

  onAddClicked(car: Car) {
    this.onAdd.emit(car);

    // this.purchasedCars = this.shopService.move(car, this.carList, this.purchasedCars);
    // this.originalCarlist = this.originalCarlist.filter(x => x.Id !== car.Id);

    // if (this.purchasedCars) {
    //   this.total += car.Price;
    // }
  }

  onRemoveClicked(car: Car) {
    this.onRemove.emit(car);
    // this.carList = this.shopService.move(car, this.purchasedCars, this.carList);
    // this.originalCarlist = this.originalCarlist.concat(car);

    // if (this.carList) {
    //   this.total -= car.Price;
    // }
  }

  onSearchModelChange(filterVal: string) {
    this.carList = this.shopService.filterCars(filterVal, this.originalCarlist);
  }

}
