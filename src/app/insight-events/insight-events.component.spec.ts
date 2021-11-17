import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightEventsComponent } from './insight-events.component';

describe('InsightEventsComponent', () => {
  let component: InsightEventsComponent;
  let fixture: ComponentFixture<InsightEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
