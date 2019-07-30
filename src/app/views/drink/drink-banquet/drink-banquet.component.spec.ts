import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkBanquetComponent } from './drink-banquet.component';

describe('DrinkBanquetComponent', () => {
  let component: DrinkBanquetComponent;
  let fixture: ComponentFixture<DrinkBanquetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkBanquetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkBanquetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
