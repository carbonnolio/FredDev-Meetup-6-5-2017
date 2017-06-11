import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

import { carReducer, CarState } from './car.reducer';
import { loginReducer, LoginState } from './login.reducer';

export { CarState } from './car.reducer';
export { LoginState } from './login.reducer';

export const reducer = combineReducers({
    login: loginReducer,
    cars: carReducer,
    router: routerReducer
});
