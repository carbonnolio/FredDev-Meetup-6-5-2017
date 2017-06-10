import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'cars-root',
  templateUrl: './cars-root.component.html',
  styleUrls: ['./cars-root.component.css']
})
export class CarsRootComponent implements OnInit, OnDestroy {

  userName: string
  routeParams: ISubscription

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeParams = this.route.params.subscribe(params => {
       this.userName = params['FullName'];
    });
  }

  ngOnDestroy() {
    this.routeParams.unsubscribe();
  }

}
