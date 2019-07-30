import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkCoffeeComponent } from './drink-coffee.component';

describe('DrinkCoffeeComponent', () => {
  let component: DrinkCoffeeComponent;
  let fixture: ComponentFixture<DrinkCoffeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkCoffeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkCoffeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
