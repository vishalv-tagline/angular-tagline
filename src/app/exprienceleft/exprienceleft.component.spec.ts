import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExprienceleftComponent } from './exprienceleft.component';

describe('ExprienceleftComponent', () => {
  let component: ExprienceleftComponent;
  let fixture: ComponentFixture<ExprienceleftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExprienceleftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExprienceleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
