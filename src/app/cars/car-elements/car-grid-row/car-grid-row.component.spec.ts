import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarGridRowComponent } from './car-grid-row.component';

describe('CarGridRowComponent', () => {
  let component: CarGridRowComponent;
  let fixture: ComponentFixture<CarGridRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarGridRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarGridRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
