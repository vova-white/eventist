import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProectionComponent } from './proection.component';

describe('ProectionComponent', () => {
  let component: ProectionComponent;
  let fixture: ComponentFixture<ProectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
