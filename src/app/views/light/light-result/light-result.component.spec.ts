import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LightResultComponent } from './light-result.component';

describe('LightResultComponent', () => {
  let component: LightResultComponent;
  let fixture: ComponentFixture<LightResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LightResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LightResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
