import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { CourseComponent } from "../course/course.component";
import { JobComponent } from "../job/job.component";
import { CourseSmallComponent } from "../course-small/course-small.component";
import { JobSmallComponent } from "../job-small/job-small.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [NavbarComponent, AboutUsComponent, CourseComponent, JobComponent, CourseSmallComponent, JobSmallComponent]
})
export class HomeComponent {

}
