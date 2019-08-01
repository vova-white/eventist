import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliersLinkComponent } from './suppliers-link.component';

describe('SuppliersLinkComponent', () => {
  let component: SuppliersLinkComponent;
  let fixture: ComponentFixture<SuppliersLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliersLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliersLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
