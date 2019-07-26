import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightProgressComponent } from './light-progress.component';

describe('LightProgressComponent', () => {
  let component: LightProgressComponent;
  let fixture: ComponentFixture<LightProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
