import {Component, Input, Output, OnInit, EventEmitter, ViewContainerRef} from '@angular/core';
import {BottomToastsManager} from '../../../Shared/CustomToaster';
import {InternFollowService} from '../../../Modules/InternFollow/InternFollow.Service';
import {CommonComponent} from '../../../app.component';
import {CompanyEntity} from '../../../Modules/Company/Company.Entity';
import {CompanyService} from '../../../Modules/Company/Company.Service';
import {UserService} from '../../../Modules/User/User.Service';
import {UserEntity} from '../../../Modules/User/User.Entity';
import {HREmployeeEntity} from '../../../Modules/HREmployee/HREmployee.Entity';
import {HREmployeeService} from '../../../Modules/HREmployee/HREmployee.Service';
import {LecturerEntity} from '../../../Modules/Lecturer/Lecturer.Entity';
import {LecturerService} from '../../../Modules/Lecturer/Lecturer.Service';


@Component ({
  selector: 'App-CompanyHome',
  templateUrl: './Lecture.Component.html',
  styleUrls: ['./Lecture.Component.css'],
  providers: [CompanyService, BottomToastsManager,LecturerService,UserService]
})
export class LectureComponent extends CommonComponent<LecturerEntity> {
  User: UserEntity;
  Lecturer: LecturerEntity;
  constructor(public LecturerService: LecturerService, public CompanyService: CompanyService, public UserService: UserService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(LecturerService, toastr, vcr);
    this.User = this.UserService.Current();
    this.LecturerService.GetId(this.User.Id).subscribe(p => {
      this.Lecturer = p;
    })
  }
}
