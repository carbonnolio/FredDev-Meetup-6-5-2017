import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { go } from '@ngrx/router-store';

import { loginActions } from '../actions';
import { handleError } from '../shared/shared.effects';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginEffects {

    private url = 'assets/users.json';

    constructor(private http: Http, private actions$: Actions) { }

    @Effect()
    login$: Observable<Action> = this.actions$.ofType(loginActions.GET_USER_INFO).map(toPayload)
        .switchMap(payload => this.http.get(this.url)
            .map(x => ({
                type: loginActions.LOGIN,
                payload: x.json() || {}
            }))
            .catch(err => Observable.of({ type: loginActions.GET_USER_INFO_FAILURE, payload: { requestError: err.toString() } }))
        );

    @Effect()
    navigateToCars$: Observable<Action> = this.actions$.ofType(loginActions.LOGIN).mapTo(go(['cars']));

    @Effect()
    showError$: Observable<Action> = handleError(this.actions$, loginActions.GET_USER_INFO_FAILURE, loginActions.DISPLAY_LOGIN_FAILURE_MESSEGE);
}
