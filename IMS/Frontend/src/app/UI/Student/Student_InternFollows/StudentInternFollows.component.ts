///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
///<reference path="../../../Modules/InternshipCourse/InternshipCourse.Entity.ts"/>
import {Component, Input, Output, OnInit, EventEmitter, ViewContainerRef} from '@angular/core';

import {debug} from 'util';

import {ActivatedRoute} from '@angular/router';
import {StudentEntity} from '../../../Modules/Student/Student.Entity';
import {BottomToastsManager} from '../../../Shared/CustomToaster';
import {StudentService} from '../../../Modules/Student/Student.Service';
import {CommonComponent} from '../../../app.component';
import {UserService} from '../../../Modules/User/User.Service';
import {UserEntity} from '../../../Modules/User/User.Entity';
import {InternNewsService} from '../../../Modules/InternNews/InternNews.Service';
import {InternNewsEntity} from '../../../Modules/InternNews/InternNews.Entity';
import {SearchInternNewsEntity} from '../../../Modules/InternNews/InternNews.SearchEntity';
import {InternFollowService} from '../../../Modules/InternFollow/InternFollow.Service';
import {InternFollowEntity} from '../../../Modules/InternFollow/InternFollow.Entity';
import {InternshipCourseEntity} from '../../../Modules/InternshipCourse/InternshipCourse.Entity';
import {InternReportsComponent} from '../Student_Intern_Reports/intern-reports.component';
import {InternReportEntity} from '../../../Modules/InternReport/InternReport.Entity';
import {SearchInternFollowEntity} from '../../../Modules/InternFollow/InternFollow.SearchEntity';


@Component({
  selector: 'App-AnInternNew',
  templateUrl: './StudentInternFollows.component.html',

  providers: [StudentService, UserService, InternFollowService, InternNewsService, BottomToastsManager]
})
export class StudentInternFollowsComponent extends CommonComponent<InternFollowEntity> {
  public UserEntity: UserEntity;
  public InternNewsEntity: InternNewsEntity;
  public InternFollowEntity: InternFollowEntity;
  public StudentEntity: StudentEntity;
  public StudentService: StudentService;
  public InternshipCourseEntity: InternshipCourseEntity;
  public InternReportEntity: InternReportEntity;
  public SearchInternFollowEntity: SearchInternFollowEntity;

  constructor(public InternFollowService: InternFollowService, toastr: BottomToastsManager, vcr: ViewContainerRef, public route: ActivatedRoute, UserService: UserService) {
    super(InternFollowService, toastr, vcr);
    this.SearchInternFollowEntity = new SearchInternFollowEntity();
    this.UserEntity = UserService.Current();
    this.SearchInternFollowEntity.StudentId = this.UserEntity.Id;
    this.StudentEntity = new StudentEntity();
    this.Search(this.SearchInternFollowEntity);

  }
  /*Choose(Intern) {
    this.InternshipCourseEntity = new InternshipCourseEntity();
    this.InternReportEntity = new InternReportEntity();

    this.HttpService.Update(this.InternFollowEntity).subscribe(p => {
      this.toastr.ShowSuccess();
    }, e => {
      this.toastr.ShowError(e);
    });
  }*/
}
