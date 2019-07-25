import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtGuestsComponent } from './court-guests.component';

describe('CourtGuestsComponent', () => {
  let component: CourtGuestsComponent;
  let fixture: ComponentFixture<CourtGuestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtGuestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
