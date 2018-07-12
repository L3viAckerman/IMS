import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../HttpService';
import  {StudentEntity} from './Student.Entity';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class StudentService extends HttpService<StudentEntity> {
  constructor(private Http: HttpClient) {
    super(Http);
    this.url = "api/students";
  }
  GetId(Id: string, IsShowLoading?: boolean): Observable<StudentEntity> {
    return this.intercept(this.http.get<StudentEntity>(`${this.url}/${Id}`, { observe: 'response', headers: this.GetHeaders() }), IsShowLoading).map(r => r.body);
  }
}

