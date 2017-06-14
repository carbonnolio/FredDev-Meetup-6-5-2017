import { Action } from '@ngrx/store';
import { carActions } from '../actions';
import { Car } from '../../app/cars/interfaces';

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

        case carActions.DISPLAY_GET_CARS_DATA_FAILURE_MESSEGE:
            return Object.assign({}, state, action.payload);

        case carActions.ADD_CAR_TO_SHOPPING_CART:

            if (action.payload) {
                const purchasedCars = move(action.payload, state.carList, state.purchasedCarList);
                const originalCarlist = state.originalCarList.filter(x => x.Id !== action.payload.Id);

                const total = purchasedCars.to ? state.total + action.payload.Price : 0;

                return Object.assign({}, state, { originalCarList: originalCarlist, carList: purchasedCars.from, purchasedCarList: purchasedCars.to, total: total });
            }

            return state;

        case carActions.REMOVE_CAR_FROM_SHOPPING_CART:

            if (action.payload) {
                const purchasedCars = move(action.payload, state.purchasedCarList, state.carList);
                const originalCarlist = state.originalCarList.concat(action.payload);

                const total = purchasedCars.to ? state.total - action.payload.Price : 0;

                return Object.assign({}, state, { originalCarList: originalCarlist, carList: purchasedCars.to, purchasedCarList: purchasedCars.from, total: total });
            }

            return state;

        case carActions.SEARCH_CAR_FIELD_CHANGED:

            const carList = filterCars(action.payload, state.originalCarList);

            return Object.assign({}, state, { carList: carList });

        default:
            return state;
    }
}

const move = (car: Car, from: Car[], to: Car[]): any => {

    if (from && to) {
      const carIdx = from.indexOf(car);

      if (car && carIdx > -1) {
        const item = from.splice(carIdx, 1);
        const c = item[0];
        to = to.concat(item);
        return { to, from };
      }
    }

    return undefined;
  }

const filterCars = (filterVal: string, coll: Car[]): Car[] => {
    return coll.filter(x => Object.keys(x).filter(y => y !== 'Image' && y !== 'Id').map(y => x[y]).join(',').toLowerCase().indexOf(filterVal.toLowerCase()) > -1);
}
