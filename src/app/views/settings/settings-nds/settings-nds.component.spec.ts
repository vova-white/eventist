import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsNdsComponent } from './settings-nds.component';

describe('SettingsNdsComponent', () => {
  let component: SettingsNdsComponent;
  let fixture: ComponentFixture<SettingsNdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsNdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsNdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
