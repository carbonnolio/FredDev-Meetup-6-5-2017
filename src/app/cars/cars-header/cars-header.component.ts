import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'cars-header',
  templateUrl: './cars-header.component.html',
  styleUrls: ['./cars-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarsHeaderComponent implements OnInit {

  @Input()
  userName: string

  constructor() { }

  ngOnInit() {
  }

}
