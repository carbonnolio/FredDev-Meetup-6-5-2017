import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';

import { carActions } from '../actions';
import { handleError } from '../shared/shared.effects';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

@Injectable()
export class CarEffects {

    private url = 'assets/cars.json';
    private delay = 3000;

    constructor(private http: Http, private actions$: Actions) { }

    @Effect()
    carData$: Observable<Action> = this.actions$.ofType(carActions.GET_CARS_DATA)
        .switchMap(payload => this.http.get(this.url)
            .map(x => ({
                type: carActions.GET_CARS_DATA_SUCCESS,
                payload: x.json() || {}
            }))
            .delay(this.delay)
            .catch(err => Observable.of({ type: carActions.GET_CARS_DATA_FAILURE, payload: { requestError: err.toString() } }))
        );

    @Effect()
    showError$: Observable<Action> = handleError(this.actions$, carActions.GET_CARS_DATA_FAILURE, carActions.DISPLAY_GET_CARS_DATA_FAILURE_MESSEGE);
}
