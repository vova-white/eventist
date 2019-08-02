import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygraphyFormatComponent } from './polygraphy-format.component';

describe('PolygraphyFormatComponent', () => {
  let component: PolygraphyFormatComponent;
  let fixture: ComponentFixture<PolygraphyFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygraphyFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygraphyFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
