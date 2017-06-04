import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cars-header',
  templateUrl: './cars-header.component.html',
  styleUrls: ['./cars-header.component.css']
})
export class CarsHeaderComponent implements OnInit {

  userName: string

  constructor() { }

  ngOnInit() {
    this.userName = 'Grigory Novikov';
  }

}
