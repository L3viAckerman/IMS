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
import {InternNewsEntity} from '../../../Modules/InternNews/InternNews.Entity';
import {InternNewsService} from '../../../Modules/InternNews/InternNews.Service';
import {SearchInternNewsEntity} from '../../../Modules/InternNews/InternNews.SearchEntity';
import {ActivatedRoute} from '@angular/router';
import {InternFollowEntity} from '../../../Modules/InternFollow/InternFollow.Entity';
import {SearchInternFollowEntity} from '../../../Modules/InternFollow/InternFollow.SearchEntity';


@Component({
  selector: 'App-CompanyHome',
  templateUrl: './CompanyListStudentInAnInternNews.component.html',
  styleUrls: ['./CompanyListStudentInAnInternNews.component.css'],
  providers: [CompanyService, BottomToastsManager, HREmployeeService, UserService, InternNewsService, InternFollowService]
})
export class CompanyListStudentInAnInternNewsComponent extends CommonComponent<InternFollowEntity> {
  User: UserEntity;
  public SearchInterFollows: SearchInternFollowEntity;

  constructor(public InternFollowService: InternFollowService, public UserService: UserService, public route: ActivatedRoute, public InternNewsService: InternNewsService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(InternFollowService, toastr, vcr);
    this.route.params.subscribe((params) => {
      this.SearchInterFollows = new SearchInternFollowEntity();
      this.SearchInterFollows.InternNewsId = params.InternNewsId;
      this.Search(this.SearchInterFollows);
    });
  }
}
