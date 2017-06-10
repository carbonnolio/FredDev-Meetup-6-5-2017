import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RemoteService } from './remote.service';

import { User } from './../cars/interfaces/user';

@Injectable()
export class LoginService implements CanActivate {

  constructor(private remoteService: RemoteService) { }

  validateUser(username: string, password: string): Observable<User> {

    return this.remoteService.findUser(username, password).map(x => {
      this.remoteService.canLogin = x.length > 0;
      return x[0];
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.remoteService.canLogin;
  }

}
