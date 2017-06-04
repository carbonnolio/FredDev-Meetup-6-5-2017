import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from './../cars/interfaces/car';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

@Injectable()
export class DataService {

  private url = 'assets/cars.json';
  private delay = 3000;

  constructor(private http: Http) { }

  getCars(): Observable<Car[]> {
    return this.http.get(this.url)
                    .map(x => x.json() || {})
                    .delay(this.delay)
                    .catch(this.handleError);
  }

  private handleError (error: any) {
    const err = error.toString();
    alert(err);

    return Observable.throw(err);
  }

}
