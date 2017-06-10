import { Action } from '@ngrx/store';
import { AppState, initialState } from './../app-state.model';
import { AUTHORIZE_USER_SUCCESS, AUTHORIZE_USER_FAILURE } from './../actions/login.actions';

export function loginReducer(state: AppState = initialState, action: Action) {
    switch (action.type) {
        case AUTHORIZE_USER_SUCCESS:
            return Object.assign({}, state, {
                shape: action.payload
            });
        case AUTHORIZE_USER_FAILURE:
            return Object.assign({}, state, {
                shape: action.payload
            });

        default:
            return state;
    }
}
