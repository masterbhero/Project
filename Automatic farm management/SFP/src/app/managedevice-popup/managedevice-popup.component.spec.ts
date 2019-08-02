import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedevicePopupComponent } from './managedevice-popup.component';

describe('ManagedevicePopupComponent', () => {
  let component: ManagedevicePopupComponent;
  let fixture: ComponentFixture<ManagedevicePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedevicePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedevicePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
