import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCarComponent } from './add-new-car.component';

describe('AddNewCarComponent', () => {
  let component: AddNewCarComponent;
  let fixture: ComponentFixture<AddNewCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
