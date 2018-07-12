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


@Component({
  selector: 'App-CompanyHome',
  templateUrl: './CompanyAnInternNews.component.html',
  styleUrls: ['./CompanyAnInternNews.component.css'],
  providers: [CompanyService, BottomToastsManager, HREmployeeService, UserService, InternNewsService]
})
export class CompanyAnInternNewsComponent extends CommonComponent<InternNewsEntity> {
  User: UserEntity;
  public InternNewsEntity: InternNewsEntity;

  constructor(public UserService: UserService, public route: ActivatedRoute, public InternNewsService: InternNewsService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(InternNewsService, toastr, vcr);
    this.route.params.subscribe((params) => {
      this.InternNewsService.GetId(params.InternNewsId).subscribe(p => {
        this.InternNewsEntity = p;
      });
    });
  }

}
