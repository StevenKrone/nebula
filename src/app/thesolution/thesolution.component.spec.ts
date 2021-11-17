import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesolutionComponent } from './thesolution.component';

describe('ThesolutionComponent', () => {
  let component: ThesolutionComponent;
  let fixture: ComponentFixture<ThesolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
