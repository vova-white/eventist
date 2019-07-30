import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkStepComponent } from './drink-step.component';

describe('DrinkStepComponent', () => {
  let component: DrinkStepComponent;
  let fixture: ComponentFixture<DrinkStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
