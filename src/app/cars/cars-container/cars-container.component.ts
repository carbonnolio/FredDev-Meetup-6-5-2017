import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { Car } from '../interfaces';

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

  constructor() { }

  ngOnInit() {
  }

  onAddClicked(car: Car) {
    this.onAdd.emit(car);
  }

  onRemoveClicked(car: Car) {
    this.onRemove.emit(car);
  }

  onSearchModelChange(filterVal: string) {
    // this.carList = this.shopService.filterCars(filterVal, this.originalCarlist);
  }

}
