import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { JobService } from '../job.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LoadingService } from '../loading.service';
import { TruncatePipe } from '../truncate.pipe';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-job-small',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TruncatePipe, RouterLink , RouterOutlet],
  templateUrl: './job-small.component.html',
  styleUrl: './job-small.component.css'
})
export class JobSmallComponent implements OnInit{


  constructor(private jobService: JobService, private http: HttpClient, private loadingService: LoadingService) {}

  public jobs:any
  
  ngOnInit(): void {

    this.loadingService.show();
    this.jobService.listAllJobs().subscribe({
      next: (res: any) => {
        this.loadingService.hide();
        let data = res

        this.jobs = data.job_list.map((e:any)=> {
          return {
            'title':e.name,
            'description':e.summary,
            'imageUrl':e.image,
          }
        })
        console.log(this.jobs)
      },
      error: (err: any) => {
        this.loadingService.hide();
      }
    })
  }


}
