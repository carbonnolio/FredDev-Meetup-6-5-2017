import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './../car-services/login.service';

@Component({
  selector: 'app-cars-login',
  templateUrl: './cars-login.component.html',
  styleUrls: ['./cars-login.component.css'],
  providers: [LoginService]
})
export class CarsLoginComponent implements OnInit {

  loginForm: FormGroup;
  failedLogin = false;

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  onLoginClicked() {
    this.failedLogin = !this.loginService.validateUser(this.loginForm.controls['userName'].value, this.loginForm.controls['password'].value);

    if (!this.failedLogin) {
      this.router.navigate(['cars']);
    }
  }

}
