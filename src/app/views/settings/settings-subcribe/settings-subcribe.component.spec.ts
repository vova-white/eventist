import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSubcribeComponent } from './settings-subcribe.component';

describe('SettingsSubcribeComponent', () => {
  let component: SettingsSubcribeComponent;
  let fixture: ComponentFixture<SettingsSubcribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSubcribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSubcribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
