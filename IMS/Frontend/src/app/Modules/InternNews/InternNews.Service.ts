import { Injectable } from '@angular/core';
import { InternNewsEntity } from "./InternNews.Entity";
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../HttpService';
import { InternFollowEntity } from '../InternFollow/InternFollow.Entity';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InternNewsService extends HttpService<InternNewsEntity> {
  constructor(private Http: HttpClient) {
    super(Http);
    this.url = "api/InternNews";
  }

  /*//Use for getting an InternNew when have this Id
  GetByInternNewId(Id: string, IsShowLoading?: boolean): Observable<InternNewsEntity> {
    return this.intercept(this.http.get<InternNewsEntity>(`${this.url}/${Id}`, { observe: 'response', headers: this.GetHeaders() }), IsShowLoading).map(r => r.body);
  }
  //HR use for getting all InternNews of his company
  GetByCompanyId(Id: string, IsShowLoading?: boolean): Observable<InternNewsEntity []> {
    return this.intercept(this.http.get<InternNewsEntity[]>(`${this.url}/HR/${Id}`, { observe: 'response', headers: this.GetHeaders() }), IsShowLoading).map(r => r.body);
  }*/
}
