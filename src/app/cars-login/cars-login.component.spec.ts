import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsLoginComponent } from './cars-login.component';

describe('CarsLoginComponent', () => {
  let component: CarsLoginComponent;
  let fixture: ComponentFixture<CarsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
