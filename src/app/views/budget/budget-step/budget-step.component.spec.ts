import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetStepComponent } from './budget-step.component';

describe('BudgetStepComponent', () => {
  let component: BudgetStepComponent;
  let fixture: ComponentFixture<BudgetStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
