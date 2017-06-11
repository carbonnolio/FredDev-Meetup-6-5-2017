import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { AppState } from '../../../core/app.state';

@Component({
  selector: 'cars-root',
  templateUrl: './cars-root.component.html',
  styleUrls: ['./cars-root.component.css']
})
export class CarsRootComponent implements OnInit, OnDestroy {

  appState$: Observable<AppState>;
  appStateSubscription: Subscription;

  appState: AppState

  constructor(private store: Store<AppState>) {
    this.appState$ = store;
   }

  ngOnInit() {
    this.appStateSubscription = this.appState$.subscribe(x => {
      this.appState = x;
    });
  }

  ngOnDestroy() {
    this.appStateSubscription.unsubscribe();
  }

}
