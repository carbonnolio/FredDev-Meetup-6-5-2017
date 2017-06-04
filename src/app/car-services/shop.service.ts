import { Injectable } from '@angular/core';
import { Car } from './../cars/interfaces/car';

@Injectable()
export class ShopService {

  constructor() { }

  move(car: Car, from: Car[], to: Car[]): Car[] {

    if (from && to) {
      const carIdx = from.indexOf(car);

      if (car && carIdx > -1) {
        const item = from.splice(carIdx, 1);
        const c = item[0];
        return to.concat(item);
      }
    }

    return undefined;
  }

  filterCars(filterVal: string, coll: Car[]): Car[] {
    return coll.filter(x => Object.keys(x).filter(y => y !== 'Image' && y !== 'Id').map(y => x[y]).join(',').toLowerCase().indexOf(filterVal.toLowerCase()) > -1);
  }

}
