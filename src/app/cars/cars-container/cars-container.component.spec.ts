import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsContainerComponent } from './cars-container.component';

describe('CarsContainerComponent', () => {
  let component: CarsContainerComponent;
  let fixture: ComponentFixture<CarsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
