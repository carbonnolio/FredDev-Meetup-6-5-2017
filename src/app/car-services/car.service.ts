import { Injectable } from '@angular/core';


@Injectable()
export class CarService {

  private dafaultImagePath = 'assets/no_car.png';

  constructor() { }

  assignImage(path: string): string {
    return path || this.dafaultImagePath;
  }

}
