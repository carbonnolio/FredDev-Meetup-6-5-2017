import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  @Output()
  onFormChanged: EventEmitter<boolean> = new EventEmitter();

  addCarForm: FormGroup;
  newCar: Car;

  constructor(private fb: FormBuilder) {

    this.addCarForm = this.fb.group({
      make: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
      imageUrl: ['']
    });
  }

  ngOnInit() {
    this.addCarForm.valueChanges.subscribe(() => {
      this.newCar =  {
        Id: undefined,
        Make: this.addCarForm.controls['make'].value,
        Model: this.addCarForm.controls['model'].value,
        Year: this.addCarForm.controls['year'].value,
        Price: this.addCarForm.controls['price'].value,
        Image: this.addCarForm.controls['imageUrl'].value || null
      };

      this.onFormChanged.emit(this.addCarForm.valid);
    });
  }

  onAddNewCarCkicked(car: Car) {
    this.onAddNewCar.emit(car);
  }

}
