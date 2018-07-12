import {Component, Input, Output, OnInit, EventEmitter, ViewContainerRef} from '@angular/core';
import {BottomToastsManager} from '../../../Shared/CustomToaster';
import {InternFollowService} from '../../../Modules/InternFollow/InternFollow.Service';
import {CommonComponent} from '../../../app.component';
import {CompanyEntity} from '../../../Modules/Company/Company.Entity';
import {CompanyService} from '../../../Modules/Company/Company.Service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../Modules/User/User.Service';
import {HREmployeeEntity} from '../../../Modules/HREmployee/HREmployee.Entity';
import {HREmployeeService} from '../../../Modules/HREmployee/HREmployee.Service';


@Component({
  selector: 'App-CompanyHome',
  templateUrl: './CompanyChangeHRInfor.component.html',
  styleUrls: ['./CompanyChangeHRInfor.component.css'],
  providers: [CompanyService, BottomToastsManager, HREmployeeService,UserService ]
})
export class CompanyChangeHRInforComponent extends CommonComponent<HREmployeeEntity> {
  public  HREmployeeEntity: HREmployeeEntity;
  constructor(public HREmployeeService: HREmployeeService, toastr: BottomToastsManager, vcr: ViewContainerRef, public route: ActivatedRoute, public UserService: UserService) {
    super(HREmployeeService, toastr, vcr);
    this.route.params.subscribe((params) => {
      if (Object.keys(params).length === 0) {
        HREmployeeService.GetId(UserService.Current().Id).subscribe(p => {
          this.HREmployeeEntity = p;
        });
      } else {
        HREmployeeService.GetId(params.HREmployeeId).subscribe(p => {
          this.HREmployeeEntity = p;
          console.log(this.HREmployeeEntity);
        });
      }
    });
  }
}
