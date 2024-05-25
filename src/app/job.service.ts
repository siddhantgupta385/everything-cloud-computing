import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }
  
  headers = new HttpHeaders({
    'API-Key': environment.API_KEY // Example header for authorization
  });

  listAllJobs(): Observable<any> {
    return this.http.get<any>(`${environment.BASE_BE_URL}/${environment.LIST_ALL_JOBS_URL}`, {headers:this.headers});
  }
}
