import { LoginState, CarState } from './reducers';

export interface AppState {
  login: LoginState,
  cars: CarState
}
