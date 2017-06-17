import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from '../../../core/app.state';
import { LoginState, CarState } from '../../../core/reducers';
import { carActions } from '../../../core/actions';

import { Car } from '../interfaces';

@Component({
  selector: 'cars-root',
  templateUrl: './cars-root.component.html',
  styleUrls: ['./cars-root.component.css']
})
export class CarsRootComponent implements OnInit, OnDestroy {

  loginState$: Observable<LoginState>;
  loginStateSubscription: Subscription;

  carState$: Observable<CarState>;
  carStateSubscription: Subscription;

  loginState: LoginState
  carState: CarState

  constructor(private store: Store<AppState>) {
    this.loginState$ = store.select('login');
    this.carState$ = store.select('cars');
   }

  ngOnInit() {
    this.loginStateSubscription = this.loginState$.subscribe(x => {
      this.loginState = x;
    });

    this.carStateSubscription = this.carState$.subscribe(x => {
      this.carState = x;
    });

    this.store.dispatch({ type: carActions.GET_CARS_DATA });
  }

  onAddClicked(car: Car) {
    this.store.dispatch({ type: carActions.ADD_CAR_TO_SHOPPING_CART, payload: car });
  }

  onRemoveClicked(car: Car) {
    this.store.dispatch({ type: carActions.REMOVE_CAR_FROM_SHOPPING_CART, payload: car });
  }

  onSearchChanged(searchVal: string) {
    this.store.dispatch({ type: carActions.SEARCH_CAR_FIELD_CHANGED, payload: searchVal });
  }

  onFormChangedEvent(valid: boolean) {
    this.store.dispatch({ type: carActions.NEW_VEHICLE_FORM_CHANGED, payload: valid });
  }

  onAddNewCarEvent(newCar: Car) {
    this.store.dispatch({ type: carActions.ADD_NEW_VEHICLE, payload: newCar });
  }

  ngOnDestroy() {
    this.loginStateSubscription.unsubscribe();
    this.carStateSubscription.unsubscribe();
  }

}
