import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSmallComponent } from './job-small.component';

describe('JobSmallComponent', () => {
  let component: JobSmallComponent;
  let fixture: ComponentFixture<JobSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobSmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
