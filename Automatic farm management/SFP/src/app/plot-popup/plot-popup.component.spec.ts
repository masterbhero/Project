import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotPopupComponent } from './plot-popup.component';

describe('PlotPopupComponent', () => {
  let component: PlotPopupComponent;
  let fixture: ComponentFixture<PlotPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
