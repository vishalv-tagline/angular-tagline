import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhelpadviceComponent } from './fhelpadvice.component';

describe('FhelpadviceComponent', () => {
  let component: FhelpadviceComponent;
  let fixture: ComponentFixture<FhelpadviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhelpadviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FhelpadviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
