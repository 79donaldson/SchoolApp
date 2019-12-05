import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject, Message } from '../interfaces';


@Injectable({providedIn: 'root'})
export class SubjectService{

  constructor(private http: HttpClient){
  }

  getAll(): Observable<Subject[]>{
    return this.http.get<Subject[]>('/api/subject')
  }

  getForTeacher(): Observable<Subject[]>{
    return this.http.get<Subject[]>('/api/subject/teacher')
  }

  getForGroup(): Observable<Subject[]>{
    return this.http.get<Subject[]>('/api/subject/group')
  }

  getById(id: string): Observable<Subject>{
    return this.http.get<Subject>(`/api/subject/${id}`)
  }

  create(subject: Subject): Observable<Subject>{
    return this.http.post<Subject>('/api/subject',subject)
  }

  update(subject: Subject): Observable<Subject>{
    return this.http.put<Subject>('/api/subject',subject)
  }

  remove(id: string): Observable<Message>{
    return this.http.delete<Message>(`/api/subject/${id}`)
  }
}