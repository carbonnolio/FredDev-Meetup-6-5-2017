import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsFooterComponent } from './cars-footer.component';

describe('CarsFooterComponent', () => {
  let component: CarsFooterComponent;
  let fixture: ComponentFixture<CarsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
