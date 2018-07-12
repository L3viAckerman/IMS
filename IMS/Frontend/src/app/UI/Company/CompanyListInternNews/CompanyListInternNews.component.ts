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


@Component({
  selector: 'App-CompanyHome',
  templateUrl: './CompanyListInternNews.component.html',
  styleUrls: ['./CompanyListInternNews.component.css'],
  providers: [CompanyService, BottomToastsManager, HREmployeeService, UserService, InternNewsService]
})
export class CompanyListInternNewsComponent extends CommonComponent<InternNewsEntity> {
  User: UserEntity;
  InternNewsEntity: InternNewsEntity;
  HREmployee: HREmployeeEntity;
  SearchInternNews: SearchInternNewsEntity;

  constructor(public HREmployeeSevice: HREmployeeService, public UserService: UserService, public InternNewsService: InternNewsService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(InternNewsService, toastr, vcr);
    this.User = this.UserService.Current();
    this.InternNewsEntity = new InternNewsEntity();
    this.SearchInternNews = new SearchInternNewsEntity();
    this.HREmployeeSevice.GetId(this.User.Id).subscribe(p => {
      this.HREmployee = p;
      this.SearchInternNews.CompanyId = this.HREmployee.CompanyId;
      this.Search(this.SearchInternNews);
      this.toastr.ShowSuccess();
    }, e => {
      this.toastr.ShowError(e);
    })
  }

}
