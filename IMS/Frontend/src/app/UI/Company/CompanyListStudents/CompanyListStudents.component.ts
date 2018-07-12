import {Component, Input, Output, OnInit, EventEmitter, ViewContainerRef} from '@angular/core';
import {BottomToastsManager} from '../../../Shared/CustomToaster';
import {InternFollowService} from '../../../Modules/InternFollow/InternFollow.Service';
import {CommonComponent} from '../../../app.component';
import {CompanyEntity} from '../../../Modules/Company/Company.Entity';
import {CompanyService} from '../../../Modules/Company/Company.Service';
import {InternshipCourseService} from '../../../Modules/InternshipCourse/InternshipCourse.Service';
import {SearchInternshipCourseEntity} from '../../../Modules/InternshipCourse/InternshipCourse.SearchEntity';
import {UserEntity} from '../../../Modules/User/User.Entity';
import {UserService} from '../../../Modules/User/User.Service';
import {InternshipCourseEntity} from '../../../Modules/InternshipCourse/InternshipCourse.Entity';


@Component({
  selector: 'App-CompanyHome',
  templateUrl: './CompanyListStudents.component.html',
  styleUrls: ['./CompanyListStudents.component.css'],
  providers: [CompanyService, BottomToastsManager, InternFollowService, InternshipCourseService, UserService]
})
export class CompanyListStudentsComponent extends CommonComponent<InternshipCourseEntity> {
  public SearchInternshipCourseEntity: SearchInternshipCourseEntity;
  public User: UserEntity;

  constructor(public InternshipCourse: InternshipCourseService, public UserService: UserService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(InternshipCourse, toastr, vcr);
    this.User = this.UserService.Current();
    this.SearchInternshipCourseEntity = new SearchInternshipCourseEntity();
    this.SearchInternshipCourseEntity.LectureId = this.User.Id;
    this.Search(this.SearchInternshipCourseEntity);
    //dung lay student bang cach ngFor let Entity of Entities Entity.Student
  }

}
