import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasttaglineexpcardComponent } from './lasttaglineexpcard.component';

describe('LasttaglineexpcardComponent', () => {
  let component: LasttaglineexpcardComponent;
  let fixture: ComponentFixture<LasttaglineexpcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LasttaglineexpcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LasttaglineexpcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
