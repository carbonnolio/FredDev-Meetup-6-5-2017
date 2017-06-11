import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Store } from '@ngrx/store';
import { GET_USER_INFO } from '../../core/actions';
import { AppState } from '../../core/app.state';
import { LoginState } from '../../core/reducers';

@Component({
  selector: 'app-cars-login',
  templateUrl: './cars-login.component.html',
  styleUrls: ['./cars-login.component.css']
})
export class CarsLoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;

  loginState$: Observable<LoginState>;
  loginStateSubscription: Subscription;

  loginState: LoginState

  constructor(private fb: FormBuilder, private store: Store<AppState>) {

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginState$ = store.select('login');

  }

  ngOnInit() {
    this.loginStateSubscription = this.loginState$.subscribe(x => {
      this.loginState = x;
    });
  }

  onLoginClicked() {
    this.store.dispatch({
      type: GET_USER_INFO,
      payload: { providedUserName: this.loginForm.controls['userName'].value, providedPassword: this.loginForm.controls['password'].value }
    });
  }

  ngOnDestroy() {
    this.loginStateSubscription.unsubscribe();
  }

}
