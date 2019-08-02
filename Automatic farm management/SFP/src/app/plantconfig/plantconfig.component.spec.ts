import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantconfigComponent } from './plantconfig.component';

describe('PlantconfigComponent', () => {
  let component: PlantconfigComponent;
  let fixture: ComponentFixture<PlantconfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantconfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
