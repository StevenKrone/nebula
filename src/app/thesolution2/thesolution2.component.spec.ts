import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Thesolution2Component } from './thesolution2.component';

describe('Thesolution2Component', () => {
  let component: Thesolution2Component;
  let fixture: ComponentFixture<Thesolution2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thesolution2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Thesolution2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
