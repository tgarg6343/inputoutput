import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grandchild1Component } from './grandchild1.component';

describe('Grandchild1Component', () => {
  let component: Grandchild1Component;
  let fixture: ComponentFixture<Grandchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grandchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grandchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
