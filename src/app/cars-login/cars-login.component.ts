import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './../car-services/login.service';

import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cars-login',
  templateUrl: './cars-login.component.html',
  styleUrls: ['./cars-login.component.css'],
  providers: [LoginService]
})
export class CarsLoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  failedLogin = false;
  loginSub: ISubscription;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  onLoginClicked() {
    this.loginSub = this.loginService.validateUser(this.loginForm.controls['userName'].value, this.loginForm.controls['password'].value)
    .subscribe(x => {
      this.failedLogin = !x;

      if (x) {
        this.router.navigate(['cars', x]);
      }
    });
  }

  ngOnDestroy() {
    this.loginSub.unsubscribe();
  }

}
