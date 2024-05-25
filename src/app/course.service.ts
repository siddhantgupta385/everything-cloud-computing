import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

    
  headers = new HttpHeaders({
    'API-Key': environment.API_KEY 
  });

  listAllCourses(): Observable<any> {
    return this.http.get<any>(`${environment.BASE_BE_URL}/${environment.LIST_ALL_COURSES_URL}`, {headers:this.headers});
  }
  getCourseDetailsBYID(): Observable<any> {
    return this.http.get<any>(`${environment.BASE_BE_URL}/${environment.GET_COURSE_DETAILS_BY_ID_URL}`, {headers:this.headers});
  }

}
