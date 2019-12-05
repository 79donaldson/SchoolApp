import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Theme } from '../interfaces';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService{
  constructor(private http: HttpClient){}

  getByTeacher(subjectId: string, courseId: string): Observable<Theme[]>{
    return this.http.get<Theme[]>(`api/theme/${subjectId}/${courseId}`)
  }

  getById(id: string): Observable<Theme>{
    return this.http.get<Theme>(`api/theme/${id}`)
  }

  create(theme: Theme): Observable<Theme>{
    return this.http.post<Theme>('api/theme', theme)
  }
}