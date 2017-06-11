import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { go } from '@ngrx/router-store';

import { loginActions } from '../actions';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/of';

@Injectable()
export class LoginEffects {

    private url = 'assets/users.json';

    constructor(
        private http: Http,
        private actions$: Actions
    ) { }

    @Effect()
    login$: Observable<Action> = this.actions$.ofType(loginActions.GET_USER_INFO).map(toPayload)
        .switchMap(payload => this.http.get(this.url)
            .map(x => ({
                type: 'LOGIN',
                payload: x.json() || {}
            }))
            .catch(() => Observable.of({ type: loginActions.GET_USER_INFO_FAILURE }))
        );

    @Effect()
    navigateToCars$: Observable<Action> = this.actions$.ofType(loginActions.LOGIN).mapTo(go(['cars']));
}
