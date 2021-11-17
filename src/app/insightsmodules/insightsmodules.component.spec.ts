import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsmodulesComponent } from './insightsmodules.component';

describe('InsightsmodulesComponent', () => {
  let component: InsightsmodulesComponent;
  let fixture: ComponentFixture<InsightsmodulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsightsmodulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsightsmodulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
