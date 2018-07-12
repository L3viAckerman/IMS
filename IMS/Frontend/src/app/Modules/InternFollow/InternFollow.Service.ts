import { Injectable } from '@angular/core';
import { InternFollowEntity } from "./InternFollow.Entity";
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../HttpService';
import { Observable } from 'rxjs/Observable';
import {FilterEntity} from '../Filter.Entity';

@Injectable()
export class InternFollowService extends HttpService<InternFollowEntity>
{
  //InternFollowEntity: InternFollowEntity;
  constructor(private Http: HttpClient) {
    super(Http);
    this.url = "api/InternFollows";
  }
  /*GetByStudentId(StudentId: string, SearchEntity?: FilterEntity, IsShowLoading?: boolean): Observable<InternFollowEntity []> {
    SearchEntity = SearchEntity === undefined ? new FilterEntity() : SearchEntity;
    return this.intercept(this.http.get<InternFollowEntity[]>(`${this.url}/Student/${StudentId}`, { observe: 'response', headers: this.GetHeaders(), params: SearchEntity.ToParams() }), IsShowLoading).map(r => r.body);
  }

  GetByInternNewsId(InternNewsId: string, SearchEntity?: FilterEntity, IsShowLoading?: boolean): Observable<InternFollowEntity []> {
    SearchEntity = SearchEntity === undefined ? new FilterEntity() : SearchEntity;
    return this.intercept(this.http.get<InternFollowEntity[]>(`${this.url}/HR/${InternNewsId}`, { observe: 'response', headers: this.GetHeaders(), params: SearchEntity.ToParams() }), IsShowLoading).map(r => r.body);
  }
  //Hr use
  GetInternStudent(InternNewsId: string, SearchEntity?: FilterEntity, IsShowLoading?: boolean): Observable<InternFollowEntity []> {
    SearchEntity = SearchEntity === undefined ? new FilterEntity() : SearchEntity;
    return this.intercept(this.http.get<InternFollowEntity[]>(`${this.url}/HR/InternStudent/${InternNewsId}`, { observe: 'response', headers: this.GetHeaders(), params: SearchEntity.ToParams() }), IsShowLoading).map(r => r.body);
  }*/




}
