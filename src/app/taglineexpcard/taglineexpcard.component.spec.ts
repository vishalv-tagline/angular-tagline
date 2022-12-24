import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaglineexpcardComponent } from './taglineexpcard.component';

describe('TaglineexpcardComponent', () => {
  let component: TaglineexpcardComponent;
  let fixture: ComponentFixture<TaglineexpcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaglineexpcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaglineexpcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
