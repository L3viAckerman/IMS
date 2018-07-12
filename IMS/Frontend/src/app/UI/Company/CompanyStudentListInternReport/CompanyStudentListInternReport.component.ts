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
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'App-CompanyHome',
  templateUrl: './CompanyStudentListInternReport.component.html',
  styleUrls: ['./CompanyStudentListInternReport.component.css'],
  providers: [CompanyService, BottomToastsManager, InternFollowService, InternshipCourseService, UserService]
})
export class CompanyStudentListInternReportComponent extends CommonComponent<InternshipCourseEntity> {
  public SearchInternshipCourseEntity: SearchInternshipCourseEntity;
  public User: UserEntity;
  public InternshipCorseEntity: InternshipCourseEntity;

  constructor(public InternshipCourse: InternshipCourseService, public route: ActivatedRoute, public UserService: UserService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(InternshipCourse, toastr, vcr);
    this.User = this.UserService.Current();
    //Search theo studentId
    this.route.params.subscribe((params) => {
      this.InternshipCourse.GetByStudentId(params.studentId).subscribe(p => {
        this.InternshipCorseEntity = p;
      });
    });
    //dung lay student bang cach ngFor
  }
}
