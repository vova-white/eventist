import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygraphyWeightComponent } from './polygraphy-weight.component';

describe('PolygraphyWeightComponent', () => {
  let component: PolygraphyWeightComponent;
  let fixture: ComponentFixture<PolygraphyWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygraphyWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygraphyWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
