import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from './../../interfaces/car';
import { CarService } from './../../../car-services/car.service';

@Component({
  selector: 'car-grid-row',
  templateUrl: './car-grid-row.component.html',
  styleUrls: ['./car-grid-row.component.css']
})
export class CarGridRowComponent implements OnInit {

  @Input()
  car: Car

  @Output()
  onAdd: EventEmitter<Car> = new EventEmitter();

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  onAddClicked() {
    this.onAdd.emit(this.car);
  }

}
