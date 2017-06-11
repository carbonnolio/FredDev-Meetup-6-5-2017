import { Action } from '@ngrx/store';
import { GET_USER_INFO, GET_USER_INFO_FAILURE, LOGIN, LOGIN_FAILURE } from './../actions/login.actions';
import { User } from '../../app/cars/interfaces/user';

export interface LoginState {
    user: User;
    providedUserName: string;
    providedPassword: string;
    getUserInfoSuccess: boolean;
    loginSuccess: boolean;
}

const initialState: LoginState = {
    user: undefined,
    providedUserName: undefined,
    providedPassword: undefined,
    getUserInfoSuccess: false,
    loginSuccess: false
}

export function loginReducer(state: LoginState = initialState, action: Action): LoginState {
    switch (action.type) {
        case GET_USER_INFO:
            return Object.assign({}, state, action.payload);
        case LOGIN:

            if (Array.isArray(action.payload) && action.payload.length > 0) {
                const user = action.payload.filter(y => y.Name.toLowerCase() === state.providedUserName.toLowerCase() && y.Password === state.providedPassword);

                if (user.length === 1) {
                    return Object.assign({}, state, {user: user[0], loginSuccess: true, getUserInfoSuccess: true });
                }
            }

            return Object.assign({}, state, { getUserInfoSuccess: true });

        case LOGIN_FAILURE:
            return state;
        default:
            return state;
    }
}
