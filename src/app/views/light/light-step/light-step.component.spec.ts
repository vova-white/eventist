import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightStepComponent } from './light-step.component';

describe('LightStepComponent', () => {
  let component: LightStepComponent;
  let fixture: ComponentFixture<LightStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
