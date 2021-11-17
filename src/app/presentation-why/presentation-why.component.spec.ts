import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationWhyComponent } from './presentation-why.component';

describe('PresentationWhyComponent', () => {
  let component: PresentationWhyComponent;
  let fixture: ComponentFixture<PresentationWhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationWhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
