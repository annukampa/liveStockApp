import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceMeasureComponent } from './performance-measure.component';

describe('PerformanceMeasureComponent', () => {
  let component: PerformanceMeasureComponent;
  let fixture: ComponentFixture<PerformanceMeasureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformanceMeasureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceMeasureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
