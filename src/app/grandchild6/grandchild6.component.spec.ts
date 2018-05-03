import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Grandchild6Component } from './grandchild6.component';

describe('Grandchild6Component', () => {
  let component: Grandchild6Component;
  let fixture: ComponentFixture<Grandchild6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Grandchild6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Grandchild6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
