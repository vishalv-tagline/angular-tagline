import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FhiredevlComponent } from './fhiredevl.component';

describe('FhiredevlComponent', () => {
  let component: FhiredevlComponent;
  let fixture: ComponentFixture<FhiredevlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FhiredevlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FhiredevlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
