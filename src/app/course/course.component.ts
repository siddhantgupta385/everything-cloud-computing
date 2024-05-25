import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {

  constructor(private route: ActivatedRoute, private courseService: CourseService) {}

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
      console.log(params)
      console.log(params['courseName'])
      // this.cardName = params['name'];
    });

    this.courseService.getCourseDetailsBYID().subscribe({
      next: (res: any) => {
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
        let data:any = environment.COURSE_DETAIL_SRE_BOOTCAMP

        this.courseDetails = data.course
            this.audience = this.courseDetails.audience,
            this.duration = this.courseDetails.duration,
            this.modules = this.courseDetails.modules,
            this.name = this.courseDetails.name,
            this.objectives = this.courseDetails.objectives,
            this.prerequisites = this.courseDetails.prerequisites,
            this.summary = this.courseDetails.summary,
            this.youtube_link = this.courseDetails.youtube_link,
        console.log(this.courseDetails)

      }
    })
  }

  toggleModule(module: any): void {
    module.expanded = !module.expanded;
  }

}
