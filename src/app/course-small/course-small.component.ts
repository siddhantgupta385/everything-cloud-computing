import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-course-small',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './course-small.component.html',
  styleUrl: './course-small.component.css'
})
export class CourseSmallComponent {


  constructor(private courseService: CourseService, private http: HttpClient) {}

  public courses:any

  ngOnInit(): void {
    this.courseService.listAllCourses().subscribe({
      next: (res: any) => {
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
        let data = environment.ALL_COURSE_TEST_RESP

        this.courses = data.course_list.map((e:any)=> {
          return {
            'title':e.name,
            'description':e.summary,
            'byline':e.name,
            'imageUrl':'https://source.unsplash.com/featured/?cloud,architecture',
          }
        })
        console.log(this.courses)

      }
    })
  }


}
