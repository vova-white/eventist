import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundStepComponent } from './sound-step.component';

describe('SoundStepComponent', () => {
  let component: SoundStepComponent;
  let fixture: ComponentFixture<SoundStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
