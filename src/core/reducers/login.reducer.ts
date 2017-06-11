import { Action } from '@ngrx/store';
import { AUTHORIZE_USER_SUCCESS, AUTHORIZE_USER_FAILURE } from './../actions/login.actions';
import { User } from '../../app/cars/interfaces/user';

export interface LoginState {
    user: User;
}

const initialState: LoginState = {
    user: undefined
}

export function loginReducer(state: LoginState = initialState, action: Action): LoginState {
    switch (action.type) {
        case AUTHORIZE_USER_SUCCESS:
            return Object.assign({}, state, {
                user: action.payload
            });
        case AUTHORIZE_USER_FAILURE:
            return Object.assign({}, state, {
                shape: action.payload
            });

        default:
            return state;
    }
}
