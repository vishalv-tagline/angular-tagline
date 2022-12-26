import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquieryComponent } from './inquiery.component';

describe('InquieryComponent', () => {
  let component: InquieryComponent;
  let fixture: ComponentFixture<InquieryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InquieryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquieryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
