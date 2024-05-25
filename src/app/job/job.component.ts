import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { JobService } from '../job.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './job.component.html',
  styleUrl: './job.component.css'
})
export class JobComponent implements OnInit{


  ngOnInit(): void {}

}
