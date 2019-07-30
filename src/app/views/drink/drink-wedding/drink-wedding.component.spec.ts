import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkWeddingComponent } from './drink-wedding.component';

describe('DrinkWeddingComponent', () => {
  let component: DrinkWeddingComponent;
  let fixture: ComponentFixture<DrinkWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
