import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Group, Message } from '../interfaces';


@Injectable({providedIn: 'root'})
export class GroupService{
  constructor(private http: HttpClient){
  }

  getAll(): Observable<Group[]>{
    return this.http.get<Group[]>('/api/group')
  }

  getById(id: string): Observable<Group>{
    return this.http.get<Group>(`/api/group/${id}`)
  }

  create(group: Group): Observable<Group>{
    return this.http.post<Group>('/api/group',group)
  }

  update(group: Group): Observable<Group>{
    return this.http.put<Group>('/api/group',group)
  }

  remove(id: string): Observable<Message>{
    return this.http.delete<Message>(`/api/group/${id}`)
  }
}