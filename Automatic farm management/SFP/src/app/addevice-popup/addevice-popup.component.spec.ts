import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddevicePopupComponent } from './addevice-popup.component';

describe('AddevicePopupComponent', () => {
  let component: AddevicePopupComponent;
  let fixture: ComponentFixture<AddevicePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddevicePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddevicePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
