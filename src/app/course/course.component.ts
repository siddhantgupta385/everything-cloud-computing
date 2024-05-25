import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  constructor(private route: ActivatedRoute, private courseService: CourseService, private loadingService: LoadingService) {}

  public courseId:any
  public courseDetails:any
  public audience:any
  public duration:any
  public modules:any
  public name:any
  public objectives:any
  public prerequisites:any
  public summary:any
  public youtube_link:any

  ngOnInit(): void {
    // Retrieve the card name parameter from the URL
    this.route.params.subscribe(params => {
      this.courseId = params['courseName']
    });

    this.loadingService.show();
    this.courseService.getCourseDetailsBYID(this.courseId).subscribe({
      next: (res: any) => {

        this.loadingService.hide();
        this.courseDetails = res.course
        this.audience = this.courseDetails.audience
        this.duration = this.courseDetails.duration
        this.modules = this.courseDetails.modules.map((e: any) => {
          return { ...e, 'expanded': false };
        }),
        this.name = this.courseDetails.name
        this.objectives = this.courseDetails.objectives
        this.prerequisites = this.courseDetails.prerequisites
        this.summary = this.courseDetails.summary
        this.youtube_link = this.courseDetails.youtube_link
      },
      error: (err: any) => {
        console.log(err)
        this.loadingService.hide();
      }
    })
  }

  toggleModule(module: any): void {
    module.expanded = !module.expanded;
  }

}
