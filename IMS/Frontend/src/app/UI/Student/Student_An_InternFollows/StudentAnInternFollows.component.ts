///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
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
import {InternshipCourseService} from '../../../Modules/InternshipCourse/InternshipCourse.Service';


@Component({
  selector: 'App-AnInternNew',
  templateUrl: './StudentAnInternFollows.component.html',

  providers: [StudentService, UserService, InternFollowService, InternNewsService, InternFollowService, BottomToastsManager]
})
export class StudentAnInternFollowsComponent extends CommonComponent<InternFollowEntity> {
  public UserEntity: UserEntity;
  public InternNewsEntity: InternNewsEntity;
  public InternFollowEntity: InternFollowEntity;
  public StudentEntity: StudentEntity;
  public InternshipCourseEntity: InternshipCourseEntity;


  constructor(public InternshipCourseService: InternshipCourseService, public InternFollowService: InternFollowService, public InternNewsService: InternNewsService, public StudentService: StudentService, toastr: BottomToastsManager, vcr: ViewContainerRef, public route: ActivatedRoute, UserService: UserService) {
    super(InternFollowService, toastr, vcr);
    this.UserEntity = UserService.Current();
    this.StudentEntity = new StudentEntity();
    this.route.params.subscribe((params) => {
      this.InternNewsService.GetId(params.InternNewsId).subscribe(p => {
        this.InternNewsEntity = p;
        this.InternFollowService.GetId(params.InternNewsId).subscribe(p => {
          this.InternFollowEntity = p;
          this.toastr.ShowSuccess();
        }), e => this.toastr.ShowError(e);
      });
    });
  }

  Choose() {
    this.InternFollowEntity.Status = 100;
    this.InternFollowService.Update(this.InternFollowEntity).subscribe(p => {
      this.InternshipCourseEntity = new InternshipCourseEntity();
      this.InternshipCourseEntity.Id = '00000000-0000-0000-0000-000000000000';
      this.InternshipCourseEntity.StudentId = this.UserEntity.Id;
      this.InternshipCourseEntity.CompanyId = this.InternNewsEntity.CompanyId;
      this.InternshipCourseEntity.StudentEntity = this.InternFollowEntity.Student;
      this.InternshipCourseService.Create(this.InternshipCourseEntity).subscribe(p => {
        this.toastr.ShowSuccess();
      }, e => this.toastr.ShowError(e));
      this.toastr.ShowSuccess();
    }, e => {
      this.toastr.ShowError(e);
    });
  }
}
