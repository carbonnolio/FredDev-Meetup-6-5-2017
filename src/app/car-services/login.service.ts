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
      this.remoteService.canLogin = x && x.length === 1;

      if (x && x.length > 1) {
        alert('Too many users with identical credentials.');
      }

      return this.remoteService.canLogin ? x[0] : undefined;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.remoteService.canLogin;
  }

}
