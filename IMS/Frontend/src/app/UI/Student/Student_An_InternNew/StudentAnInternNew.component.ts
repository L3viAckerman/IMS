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


@Component({
  selector: 'App-AnInternNew',
  templateUrl: './StudentAnInternNew.component.html',

  providers: [StudentService, UserService, InternFollowService, InternNewsService, InternFollowService, BottomToastsManager]
})
export class StudentAnInternNewComponent extends CommonComponent<InternFollowEntity> {
  public UserEntity: UserEntity;
  public InternNewsEntity: InternNewsEntity;
  public InternFollowEntity: InternFollowEntity;
  public StudentEntity: StudentEntity;


  constructor(public InternFollowService: InternFollowService, public InternNewsService: InternNewsService, public StudentService: StudentService, toastr: BottomToastsManager, vcr: ViewContainerRef, public route: ActivatedRoute, UserService: UserService) {
    super(InternFollowService, toastr, vcr);
    this.UserEntity = UserService.Current();
    this.StudentEntity = new StudentEntity();
    this.route.params.subscribe((params) => {
      this.InternNewsService.GetId(params.InternNewsId).subscribe(p => {
        this.InternNewsEntity = p;
        this.StudentService.GetId(this.UserEntity.Id).subscribe(p => {
          this.StudentEntity = p;
        });
      });
    });
  }

  Follow() {
    this.InternFollowEntity = new InternFollowEntity();
    this.InternFollowEntity.StudentId = this.StudentEntity.Id;
    this.InternFollowEntity.Student = this.StudentEntity;
    this.InternFollowEntity.InternNewsEntity = this.InternNewsEntity;
    this.InternFollowEntity.InternNewsId = this.InternNewsEntity.Id;
    this.InternFollowEntity.Status = 1;
    this.InternFollowEntity.Id = '00000000-0000-0000-0000-000000000000';
    this.HttpService.Create(this.InternFollowEntity).subscribe(p => {
      this.toastr.ShowSuccess();
    }, e => {
      this.toastr.ShowError(e);
    });
  }
}
