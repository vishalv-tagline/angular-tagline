import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglineclientratingComponent } from './taglineclientrating.component';

describe('TaglineclientratingComponent', () => {
  let component: TaglineclientratingComponent;
  let fixture: ComponentFixture<TaglineclientratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaglineclientratingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaglineclientratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
