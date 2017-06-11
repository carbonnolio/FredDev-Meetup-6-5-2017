import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import { AppState } from '../../core/app.state';
import { LoginState } from '../../core/reducers';


@Injectable()
export class LoginService implements CanActivate {

  constructor(private store: Store<AppState>) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.store.select<LoginState>('login').map(x => x.loginSuccess);
  }

}
