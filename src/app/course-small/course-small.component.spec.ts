import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSmallComponent } from './course-small.component';

describe('CourseSmallComponent', () => {
  let component: CourseSmallComponent;
  let fixture: ComponentFixture<CourseSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
