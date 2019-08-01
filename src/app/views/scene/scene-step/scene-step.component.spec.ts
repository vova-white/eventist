import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneStepComponent } from './scene-step.component';

describe('SceneStepComponent', () => {
  let component: SceneStepComponent;
  let fixture: ComponentFixture<SceneStepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneStepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
