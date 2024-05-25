import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { JobService } from '../job.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-job-small',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './job-small.component.html',
  styleUrl: './job-small.component.css'
})
export class JobSmallComponent implements OnInit{


  constructor(private jobService: JobService, private http: HttpClient) {}

  public cards:any
  
  ngOnInit(): void {
    this.jobService.listAllJobs().subscribe({
      next: (res: any) => {
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
        let data = environment.ALL_JOB_TEST_RESP

        this.cards = data.job_list.map((e:any)=> {
          return {
            'title':e.name,
            'description':e.summary,
            'imageUrl':'https://source.unsplash.com/featured/?cloud,architecture',
          }
        })
        console.log(this.cards)

      }
    })
  }


}
