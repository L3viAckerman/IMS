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
import {SearchInternFollowEntity} from '../../../Modules/InternFollow/InternFollow.SearchEntity';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'App-AnInternNew',
  templateUrl: './StudentListInternNews.component.html',

  providers: [StudentService, UserService, InternFollowService, InternNewsService, InternFollowService, BottomToastsManager]
})
export class StudentListInternNewsComponent extends CommonComponent<InternFollowEntity> {
  public UserEntity: UserEntity;
  public InternNewsEntity: InternNewsEntity;
  public StudentEntity: StudentEntity;
  public SearchInternFollowEntity: SearchInternFollowEntity;
  public InternNews: InternNewsEntity[];

  constructor(public InternFollowService: InternFollowService, public InternNewsService: InternNewsService, public StudentService: StudentService, toastr: BottomToastsManager, vcr: ViewContainerRef, public route: ActivatedRoute, UserService: UserService) {
    super(InternFollowService, toastr, vcr);
    this.UserEntity = UserService.Current();
    this.SearchInternFollowEntity = new SearchInternFollowEntity();
    this.SearchInternFollowEntity.StudentId = this.UserEntity.Id;
    console.log(this.UserEntity.Id);
    this.Search(this.SearchInternFollowEntity);
  }
}
