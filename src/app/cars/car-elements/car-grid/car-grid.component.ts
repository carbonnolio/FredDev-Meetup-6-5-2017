import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
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

  @Output()
  onAdd: EventEmitter<Car> = new EventEmitter();

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  onAddClicked(car: Car) {
    this.onAdd.emit(car);
  }

  onAddNewCkicked() {
    alert('Not Inplemented!');
  }

  open(content) {
    this.modalService.open(content);
  }

}
