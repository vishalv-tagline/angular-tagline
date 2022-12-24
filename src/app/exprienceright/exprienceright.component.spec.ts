import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpriencerightComponent } from './exprienceright.component';

describe('ExpriencerightComponent', () => {
  let component: ExpriencerightComponent;
  let fixture: ComponentFixture<ExpriencerightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpriencerightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpriencerightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
