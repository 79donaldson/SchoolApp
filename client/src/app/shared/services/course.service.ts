import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course, Message } from '../interfaces';


@Injectable({providedIn: 'root'})
export class CourseService{

  constructor(private http: HttpClient){
  }

  getAll(): Observable<Course[]>{
    return this.http.get<Course[]>('/api/course')
  }

  getById(id: string): Observable<Course>{
    return this.http.get<Course>(`/api/course/${id}`)
  }

  create(course: Course): Observable<Course>{
    return this.http.post<Course>('/api/course',course)
  }

  update(course: Course): Observable<Course>{
    return this.http.put<Course>('/api/course',course)
    //return this.http.patch<Course>(`/api/category/${id}`, fd)
  }

  remove(id: string): Observable<Message>{
    return this.http.delete<Message>(`/api/course/${id}`)
  }
}