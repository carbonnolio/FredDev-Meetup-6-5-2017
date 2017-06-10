import { User } from './../cars/interfaces/user';
import { Car } from './../cars/interfaces/car';

export class AppState {
  constructor(
    public user: User,
    public originalCarList: Car[],
    public carList: Car[],
    public purchasedCarList: Car[]
  ) { }
}

export const initialState: AppState = {
    user: undefined,
    originalCarList: undefined,
    carList: undefined,
    purchasedCarList: []
};
