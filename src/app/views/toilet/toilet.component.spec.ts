import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToiletComponent } from './toilet.component';

describe('ToiletComponent', () => {
  let component: ToiletComponent;
  let fixture: ComponentFixture<ToiletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToiletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToiletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
