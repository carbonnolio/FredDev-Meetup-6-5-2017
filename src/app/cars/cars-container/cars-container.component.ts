import { Component, OnInit } from '@angular/core';
import { Car } from './../interfaces/car';
import { DataService } from './../../car-services/data.service';
import { ShopService } from './../../car-services/shop.service';

@Component({
  selector: 'cars-container',
  templateUrl: './cars-container.component.html',
  styleUrls: ['./cars-container.component.css'],
})
export class CarsContainerComponent implements OnInit {

  private total = 0;

  private originalCarlist: Car[];
  private carList: Car[];
  private purchasedCars: Car[] = [];

  constructor(private dataService: DataService, private shopService: ShopService) { }

  ngOnInit() {
    this.dataService.getCars().subscribe(x => {
      this.originalCarlist = x;
      this.carList = this.originalCarlist;
    },
      err => {
        console.error(err.toString());
      });
  }

  onAddClicked(car: Car) {
    this.purchasedCars = this.shopService.move(car, this.carList, this.purchasedCars);
    this.originalCarlist = this.originalCarlist.filter(x => x.Id !== car.Id);

    if (this.purchasedCars) {
      this.total += car.Price;
    }
  }

  onRemoveClicked(car: Car) {
    this.carList = this.shopService.move(car, this.purchasedCars, this.carList);
    this.originalCarlist = this.originalCarlist.concat(car);

    if (this.carList) {
      this.total -= car.Price;
    }
  }

  onSearchModelChange(filterVal: string) {
    this.carList = this.shopService.filterCars(filterVal, this.originalCarlist);
  }

}
