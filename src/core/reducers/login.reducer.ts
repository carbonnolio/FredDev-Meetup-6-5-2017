import { Action } from '@ngrx/store';
import { loginActions } from '../actions/';
import { User } from '../../app/cars/interfaces/user';

export interface LoginState {
    user: User;
    providedUserName: string;
    providedPassword: string;
    getUserInfoSuccess: boolean;
    loginSuccess: boolean;
    requestError: string;
}

const initialState: LoginState = {
    user: undefined,
    providedUserName: undefined,
    providedPassword: undefined,
    getUserInfoSuccess: false,
    loginSuccess: false,
    requestError: undefined
}

export function loginReducer(state: LoginState = initialState, action: Action): LoginState {
    switch (action.type) {
        case loginActions.GET_USER_INFO:
            return Object.assign({}, state, action.payload);

        case loginActions.GET_USER_INFO_FAILURE:
            return Object.assign({}, state, action.payload);

        case loginActions.LOGIN:
            return validateUser(action, state);

        case loginActions.LOGIN_FAILURE:
            return state; // not inplemented.. yet
        default:
            return state;
    }
}

const validateUser = (action: Action, state: LoginState) => {
    if (Array.isArray(action.payload) && action.payload.length > 0) {
        const user = action.payload.filter(y => y.Name.toLowerCase() === state.providedUserName.toLowerCase() && y.Password === state.providedPassword);

        if (user.length === 1) {
            return Object.assign({}, state, { user: user[0], loginSuccess: true, getUserInfoSuccess: true });
        }
    }

    return Object.assign({}, state, { getUserInfoSuccess: true });
}
