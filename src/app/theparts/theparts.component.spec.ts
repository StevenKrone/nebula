import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThepartsComponent } from './theparts.component';

describe('ThepartsComponent', () => {
  let component: ThepartsComponent;
  let fixture: ComponentFixture<ThepartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThepartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThepartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
