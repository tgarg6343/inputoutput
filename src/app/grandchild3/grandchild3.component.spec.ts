import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grandchild3Component } from './grandchild3.component';

describe('Grandchild3Component', () => {
  let component: Grandchild3Component;
  let fixture: ComponentFixture<Grandchild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grandchild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grandchild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
