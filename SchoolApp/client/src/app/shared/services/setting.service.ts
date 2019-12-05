import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Setting } from '../interfaces';

@Injectable({providedIn: 'root'})
export class SettingService{
  constructor(private http: HttpClient){ }

  get(): Observable<Setting>{
    return this.http.get<Setting>('api/setting')
  }

  save(setting: Setting): Observable<Setting>{
    return this.http.put<Setting>('api/setting',setting)
  }

}