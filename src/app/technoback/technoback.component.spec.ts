import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnobackComponent } from './technoback.component';

describe('TechnobackComponent', () => {
  let component: TechnobackComponent;
  let fixture: ComponentFixture<TechnobackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnobackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnobackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
