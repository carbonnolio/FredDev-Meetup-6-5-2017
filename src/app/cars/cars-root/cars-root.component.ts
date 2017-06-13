import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from '../../../core/app.state';
import { LoginState, CarState } from '../../../core/reducers';
import { carActions } from '../../../core/actions';

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

  ngOnDestroy() {
    this.loginStateSubscription.unsubscribe();
    this.carStateSubscription.unsubscribe();
  }

}
