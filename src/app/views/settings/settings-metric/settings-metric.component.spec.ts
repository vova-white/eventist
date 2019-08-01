import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsMetricComponent } from './settings-metric.component';

describe('SettingsMetricComponent', () => {
  let component: SettingsMetricComponent;
  let fixture: ComponentFixture<SettingsMetricComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsMetricComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
