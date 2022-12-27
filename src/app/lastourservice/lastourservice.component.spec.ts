import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastourserviceComponent } from './lastourservice.component';

describe('LastourserviceComponent', () => {
  let component: LastourserviceComponent;
  let fixture: ComponentFixture<LastourserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastourserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastourserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
