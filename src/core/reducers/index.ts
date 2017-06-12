import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { routerReducer } from '@ngrx/router-store';

import { carReducer, CarState } from './car.reducer';
import { loginReducer, LoginState } from './login.reducer';

export { CarState } from './car.reducer';
export { LoginState } from './login.reducer';

const reducers = {
    login: loginReducer,
    cars: carReducer,
    router: routerReducer
};

// See this issue: https://github.com/ngrx/store/issues/315
const developmentReducer = compose(combineReducers)(reducers);
const productionReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
    return developmentReducer(state, action);
    // if (PROD) {
    //     return productionReducer(state, action);
    // } else {
    //     return developmentReducer(state, action);
    // }
}
