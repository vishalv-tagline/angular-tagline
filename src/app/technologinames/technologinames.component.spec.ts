import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologinamesComponent } from './technologinames.component';

describe('TechnologinamesComponent', () => {
  let component: TechnologinamesComponent;
  let fixture: ComponentFixture<TechnologinamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologinamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologinamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
