import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cars-footer',
  templateUrl: './cars-footer.component.html',
  styleUrls: ['./cars-footer.component.css']
})
export class CarsFooterComponent implements OnInit {

  today: string;

  constructor() { }

  ngOnInit() {
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    this.today = `${mm}/${dd}/${yyyy}`;
  }

}
