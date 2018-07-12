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


@Component({
  selector: 'App-StudentProfile',
  templateUrl: './StudentInternNews.component.html',

  providers: [StudentService, BottomToastsManager, InternNewsService, UserService]
})
export class StudentInternNewsComponent extends CommonComponent<InternNewsEntity> {
  public StudentEntity: StudentEntity = new StudentEntity();
  public UserEntity: UserEntity;
  public SearchInternNewsEntity: SearchInternNewsEntity;

  constructor(public InternNewsService: InternNewsService, toastr: BottomToastsManager, vcr: ViewContainerRef, public route: ActivatedRoute, UserService: UserService) {
    super(InternNewsService, toastr, vcr);
    this.UserEntity = UserService.Current();
    this.SearchInternNewsEntity = new SearchInternNewsEntity();
    this.Search(this.SearchInternNewsEntity);
  }
}
