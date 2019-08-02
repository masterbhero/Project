import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplepopupComponent } from './examplepopup.component';

describe('ExamplepopupComponent', () => {
  let component: ExamplepopupComponent;
  let fixture: ComponentFixture<ExamplepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamplepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
