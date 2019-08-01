import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsCurrencyComponent } from './settings-currency.component';

describe('SettingsCurrencyComponent', () => {
  let component: SettingsCurrencyComponent;
  let fixture: ComponentFixture<SettingsCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
