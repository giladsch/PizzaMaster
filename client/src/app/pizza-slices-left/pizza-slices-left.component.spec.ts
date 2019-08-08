import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSlicesLeftComponent } from './pizza-slices-left.component';

describe('PizzaSlicesLeftComponent', () => {
  let component: PizzaSlicesLeftComponent;
  let fixture: ComponentFixture<PizzaSlicesLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaSlicesLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSlicesLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
