import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsBigComponent } from './about-us-big.component';

describe('AboutUsBigComponent', () => {
  let component: AboutUsBigComponent;
  let fixture: ComponentFixture<AboutUsBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutUsBigComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutUsBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
