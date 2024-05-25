import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { JobService } from '../job.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink, RouterOutlet],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit{

  constructor(private route: ActivatedRoute, private jobService: JobService, private loadingService: LoadingService) {}

  public jobId:any
  public jobDetails:any
  public name:any
  public recommended_courses:any
  public responsibilities:any
  public summary:any
  public technical_skills:any

  ngOnInit(): void {

    // Retrieve the card name parameter from the URL
    this.route.params.subscribe(params => {
      this.jobId = params['jobName']
    });

    this.loadingService.show();
    this.jobService.getJobDetailsBYID(this.jobId).subscribe({
      next: (res: any) => {

        this.loadingService.hide();
        console.log(res)
        this.loadingService.hide();
        this.jobDetails = res.job
        this.name = this.jobDetails.name
        this.recommended_courses = this.jobDetails.recommended_courses
        this.responsibilities = this.jobDetails.responsibilities
        this.summary = this.jobDetails.summary
        this.technical_skills = this.jobDetails.technical_skills

      },
      error: (err: any) => {
        console.log(err)
        this.loadingService.hide();
      }
    })
  
  }

}
