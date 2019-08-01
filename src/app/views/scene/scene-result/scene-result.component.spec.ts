import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneResultComponent } from './scene-result.component';

describe('SceneResultComponent', () => {
  let component: SceneResultComponent;
  let fixture: ComponentFixture<SceneResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
