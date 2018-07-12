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


@Component({
  selector: 'App-StudentProfile',
  templateUrl: './StudentProfile.component.html',

  providers: [StudentService, BottomToastsManager]
})
export class StudentProfileComponent extends CommonComponent<StudentEntity> {
  public StudentEntity: StudentEntity = new StudentEntity();
  public UserEntity:UserEntity;
  constructor(public StudentService: StudentService, toastr: BottomToastsManager, vcr: ViewContainerRef, public route: ActivatedRoute, UserService: UserService) {
    super(StudentService, toastr, vcr);
    this.UserEntity = UserService.Current();
    this.route.params.subscribe((params) => {
      if (Object.keys(params).length === 0) {
        StudentService.GetId(this.UserEntity.Id).subscribe(p => {
          this.StudentEntity = p;
        });
      } else {
        StudentService.GetId(params.StudentId).subscribe(p => {
          this.StudentEntity = p;
        });
      }
    });
  }
}
