import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RemoteService } from './remote.service';

@Injectable()
export class LoginService implements CanActivate {

  constructor(private remoteService: RemoteService) { }

  validateUser(username: string, password: string): boolean {
    username = 'grigory';
    password = 'helloworld';
    this.remoteService.canLogin = username === 'grigory' && password === 'helloworld';

    return this.remoteService.canLogin;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.remoteService.canLogin;
  }

}
