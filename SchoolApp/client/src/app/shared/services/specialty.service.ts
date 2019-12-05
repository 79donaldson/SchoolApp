import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message, Specialty } from '../interfaces';


@Injectable({providedIn: 'root'})
export class SpecialtyService{
  constructor(private http: HttpClient){
  }

  getAll(): Observable<Specialty[]>{
    return this.http.get<Specialty[]>('/api/specialty')
  }

  getById(id: string): Observable<Specialty>{
    return this.http.get<Specialty>(`/api/specialty/${id}`)
  }

  create(specialty: Specialty): Observable<Specialty>{
    return this.http.post<Specialty>('/api/specialty',specialty)
  }

  update(specialty: Specialty): Observable<Specialty>{
    return this.http.put<Specialty>('/api/specialty', specialty)
  }

  remove(id: string): Observable<Message>{
    return this.http.delete<Message>(`/api/specialty/${id}`)
  }
}