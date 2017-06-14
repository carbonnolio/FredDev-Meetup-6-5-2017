import { Observable } from 'rxjs/Observable';

import { Action } from '@ngrx/store';
import { Actions, toPayload } from '@ngrx/effects';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';


export const handleError = (actions$: Actions, actionCatch: string, actionDispatch: string): Observable<Action> => actions$.ofType(actionCatch).map(toPayload)
    .switchMap(payload => {
        alert(payload.requestError || 'NAY!');
        return  Observable.of({ type: actionDispatch });
    });
