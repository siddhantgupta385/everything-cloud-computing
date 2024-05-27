import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoadingService } from '../loading.service';
import { TruncatePipe } from '../truncate.pipe';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-course-small',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, TruncatePipe],
  templateUrl: './course-small.component.html',
  styleUrl: './course-small.component.css'
})
export class CourseSmallComponent {


  constructor(private courseService: CourseService, private http: HttpClient, private loadingService: LoadingService) {}

  public courses:any

  ngOnInit(): void {

    this.loadingService.show();
    this.courseService.listAllCourses().subscribe({
      next: (res: any) => {
        console.log(res)
        let data = res
        this.loadingService.hide();
        this.courses = data.course_list.map((e:any)=> {
          return {
            'title':e.name,
            'description':e.summary,
            'byline':e.name,
            'imageUrl':e.image,
          }
        })
      },
      error: (err: any) => {
        this.loadingService.hide();
        
      }
    })
  }


}
