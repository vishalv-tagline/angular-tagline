import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnofrontComponent } from './technofront.component';

describe('TechnofrontComponent', () => {
  let component: TechnofrontComponent;
  let fixture: ComponentFixture<TechnofrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnofrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnofrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
