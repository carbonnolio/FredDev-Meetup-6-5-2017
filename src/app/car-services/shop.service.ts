import { Injectable } from '@angular/core';
import { Car } from './../cars/interfaces/car';

@Injectable()
export class ShopService {

  constructor() { }

  filterCars(filterVal: string, coll: Car[]): Car[] {
    return coll.filter(x => Object.keys(x).filter(y => y !== 'Image' && y !== 'Id').map(y => x[y]).join(',').toLowerCase().indexOf(filterVal.toLowerCase()) > -1);
  }

}
