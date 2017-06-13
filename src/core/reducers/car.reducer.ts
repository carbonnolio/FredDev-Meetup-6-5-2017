import { Action } from '@ngrx/store';
import { carActions } from '../actions';
import { Car } from '../../app/cars/interfaces/car';

export interface CarState {
    loaded: boolean;
    total: number;
    originalCarList: Car[];
    carList: Car[];
    purchasedCarList: Car[];
    requestError: string;
}

const initialState: CarState = {
    loaded: false,
    total: 0,
    originalCarList: undefined,
    carList: undefined,
    purchasedCarList: [],
    requestError: undefined
}

export function carReducer(state: CarState = initialState, action: Action): CarState {
    switch (action.type) {
        case carActions.GET_CARS_DATA:
            return Object.assign({}, state, action.payload);

        case carActions.GET_CARS_DATA_SUCCESS:
        if (Array.isArray(action.payload) && action.payload.length > 0) {
            return Object.assign({}, state, { loaded: true, originalCarList: action.payload, carList: action.payload });
        }
            return Object.assign({}, state, { loaded: true });

        case carActions.GET_CARS_DATA_FAILURE:
            return Object.assign({}, state, action.payload);

        default:
            return state;
    }
}
