import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotmenuComponent } from './plotmenu.component';

describe('PlotmenuComponent', () => {
  let component: PlotmenuComponent;
  let fixture: ComponentFixture<PlotmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
