import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsHeaderComponent } from './cars-header.component';

describe('CarsHeaderComponent', () => {
  let component: CarsHeaderComponent;
  let fixture: ComponentFixture<CarsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
