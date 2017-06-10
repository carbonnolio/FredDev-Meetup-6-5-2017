import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from './../cars/interfaces/user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RemoteService {

  private url = 'assets/users.json';

  canLogin = false;

  constructor(private http: Http) { }

  findUser(name: string, password: string): Observable<User[]> {

    return this.http.get(this.url)
      .map(x => x.json().filter(y => y.Name.toLowerCase() === name.toLowerCase() && y.Password === password) || {})
      .catch(this.handleError);
  }

  private handleError(error: any) {
    const err = error.toString();
    alert(err);

    return Observable.throw(err);
  }

}
