import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetResultComponent } from './budget-result.component';

describe('BudgetResultComponent', () => {
  let component: BudgetResultComponent;
  let fixture: ComponentFixture<BudgetResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BudgetResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
