import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Car } from './../../interfaces/car';
import { CarService } from './../../../car-services/car.service';
import { ShopService } from './../../../car-services/shop.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent implements OnInit {

  @Input()
  purchasedCars: Car[];

  @Output()
  onRemove: EventEmitter<Car> = new EventEmitter();

  private overId: number;

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  mouseOver(car: Car) {
    this.overId = car.Id;
  }

  mouseOut() {
    this.overId = undefined;
  }

  onRemoveClecked(car: Car) {
    this.onRemove.emit(car);
    this.overId = undefined;
  }

}
