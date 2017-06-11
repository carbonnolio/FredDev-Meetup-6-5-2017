import { Action } from '@ngrx/store';
import { Car } from '../../app/cars/interfaces/car';

export interface CarState {
    loading: boolean;
    loaded: boolean;
    originalCarList: Car[];
    carList: Car[];
    purchasedCarList: Car[];
}

const initialState: CarState = {
    loading: true,
    loaded: false,
    originalCarList: undefined,
    carList: undefined,
    purchasedCarList: []
}

export function carReducer(state: CarState = initialState, action: Action): CarState {
    switch (action.type) {
        default:
            return state;
    }
}
