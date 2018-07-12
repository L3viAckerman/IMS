import {Injectable} from '@angular/core';
import {InternshipCourseEntity} from './InternshipCourse.Entity';
import {HttpClient} from '@angular/common/http';
import {HttpService} from '../HttpService';
import {InternFollowEntity} from '../InternFollow/InternFollow.Entity';
import {Observable} from 'rxjs/Observable';
import {FilterEntity} from '../Filter.Entity';

@Injectable()
export class InternshipCourseService extends HttpService<InternshipCourseEntity> {
  constructor(private Http: HttpClient) {
    super(Http);
    this.url = 'api/InternshipCourses';
  }
  //Hr dùng để lấy danh sách những thưc tập tại công ty
  GetUsingCompanyId(CompanyId: string, SearchEntity?: FilterEntity, IsShowLoading?: boolean): Observable<InternshipCourseEntity []> {
    SearchEntity = SearchEntity === undefined ? new FilterEntity() : SearchEntity;
    return this.intercept(this.http.get<InternshipCourseEntity []>(`${this.url}/HR/Interns/${CompanyId}`, {
      observe: 'response',
      headers: this.GetHeaders(),
      params: SearchEntity.ToParams()
    }), IsShowLoading).map(r => r.body);
  }
  //dùng bởi cả student, hr và lecture để lấy ra bài thực tập cảu sinh viên cụ thể
  GetByStudentId(StudentId: string, SearchEntity?: FilterEntity, IsShowLoading?: boolean): Observable<InternshipCourseEntity> {
    SearchEntity = SearchEntity === undefined ? new FilterEntity() : SearchEntity;
    return this.intercept(this.http.get<InternshipCourseEntity>(`${this.url}/InternStudent/${StudentId}`, {
      observe: 'response',
      headers: this.GetHeaders(),
      params: SearchEntity.ToParams()
    }), IsShowLoading).map(r => r.body);
  }

}
