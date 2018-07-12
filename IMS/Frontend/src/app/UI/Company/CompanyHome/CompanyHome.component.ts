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


@Component({
  selector: 'App-CompanyHome',
  templateUrl: './CompanyHome.component.html',
  styleUrls: ['./CompanyHome.componenet.css'],
  providers: [CompanyService, BottomToastsManager,CompanyService,HREmployeeService,UserService]
})
export class CompanyHomeComponent extends CommonComponent<HREmployeeEntity> {
  User: UserEntity;
  Company: CompanyEntity;
  HREmployee: HREmployeeEntity;
  CompanyName: string;
  constructor(public HREmployeeSevice: HREmployeeService,public CompanyService: CompanyService,public UserService: UserService,toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(HREmployeeSevice, toastr, vcr);
    this.User = this.UserService.Current();
    this.HREmployeeSevice.GetId(this.User.Id).subscribe(p => {
      this.HREmployee = p;
      console.log(this.HREmployee);
      this.CompanyService.GetId(this.HREmployee.CompanyId).subscribe(p => {
        this.Company = p;
        console.log(this.Company);
      })
    });
  }
}
