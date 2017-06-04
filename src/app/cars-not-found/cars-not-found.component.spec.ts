import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsNotFoundComponent } from './cars-not-found.component';

describe('CarsNotFoundComponent', () => {
  let component: CarsNotFoundComponent;
  let fixture: ComponentFixture<CarsNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
