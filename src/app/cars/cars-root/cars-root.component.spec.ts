import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsRootComponent } from './cars-root.component';

describe('CarsRootComponent', () => {
  let component: CarsRootComponent;
  let fixture: ComponentFixture<CarsRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
