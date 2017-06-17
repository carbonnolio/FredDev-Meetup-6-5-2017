import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Car } from '../../interfaces';

@Component({
  selector: 'add-new-car',
  templateUrl: './add-new-car.component.html',
  styleUrls: ['./add-new-car.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddNewCarComponent implements OnInit {

  @Output()
  onAddNewCar: EventEmitter<Car> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onAddNewCarCkicked(car: Car) {
    this.onAddNewCar.emit(car);
  }

}
