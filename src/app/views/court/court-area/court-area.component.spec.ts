import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtAreaComponent } from './court-area.component';

describe('CourtAreaComponent', () => {
  let component: CourtAreaComponent;
  let fixture: ComponentFixture<CourtAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
