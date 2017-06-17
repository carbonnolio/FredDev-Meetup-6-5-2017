import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Car } from './../../interfaces/car';

@Component({
  selector: 'car-grid',
  templateUrl: './car-grid.component.html',
  styleUrls: ['./car-grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarGridComponent implements OnInit {

  @Input()
  cars: Car[];

  @Input()
  formValid: boolean;

  @Output()
  onAdd: EventEmitter<Car> = new EventEmitter();

  @Output()
  onFormChanged: EventEmitter<boolean> = new EventEmitter();

  @Output()
  onAddNewCar: EventEmitter<Car> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onAddClicked(car: Car) {
    this.onAdd.emit(car);
  }

  onFormChangedEvent(valid: boolean) {
    this.onFormChanged.emit(valid);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.onAddNewCar.emit(result.newCar);
    }, (reason) => {})
  }

}
