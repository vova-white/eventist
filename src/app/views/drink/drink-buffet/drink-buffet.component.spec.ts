import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkBuffetComponent } from './drink-buffet.component';

describe('DrinkBuffetComponent', () => {
  let component: DrinkBuffetComponent;
  let fixture: ComponentFixture<DrinkBuffetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkBuffetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkBuffetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
