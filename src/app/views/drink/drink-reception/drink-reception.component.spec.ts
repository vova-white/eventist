import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkReceptionComponent } from './drink-reception.component';

describe('DrinkReceptionComponent', () => {
  let component: DrinkReceptionComponent;
  let fixture: ComponentFixture<DrinkReceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkReceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkReceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
