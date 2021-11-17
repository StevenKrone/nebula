import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurgoalsComponent } from './ourgoals.component';

describe('OurgoalsComponent', () => {
  let component: OurgoalsComponent;
  let fixture: ComponentFixture<OurgoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurgoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurgoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
