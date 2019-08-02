import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WateringResultComponent } from './watering-result.component';

describe('WateringResultComponent', () => {
  let component: WateringResultComponent;
  let fixture: ComponentFixture<WateringResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WateringResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WateringResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
