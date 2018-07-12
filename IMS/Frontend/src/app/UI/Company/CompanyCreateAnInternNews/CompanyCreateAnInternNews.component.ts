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


@Component({
  selector: 'App-CompanyHome',
  templateUrl: './CompanyCreateAnInternNews.component.html',
  styleUrls: ['./CompanyCreateAnInternNews.component.css'],
  providers: [CompanyService, BottomToastsManager, HREmployeeService, UserService, InternNewsService]
})
export class CompanyCreateAnInternNewsComponent extends CommonComponent<HREmployeeEntity> {
  User: UserEntity;
  InternNewsEntity: InternNewsEntity;
  HREmployee: HREmployeeEntity;

  constructor(public HREmployeeSevice: HREmployeeService, public UserService: UserService, public InternNewsService: InternNewsService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(HREmployeeSevice, toastr, vcr);
    this.User = this.UserService.Current();
    this.HREmployeeSevice.GetId(this.User.Id).subscribe(p => {
      this.HREmployee = p;
      this.InternNewsEntity = new InternNewsEntity();
      this.InternNewsEntity.CompanyId = this.HREmployee.CompanyId;
      console.log(this.InternNewsEntity.CompanyId);
    });
  }

  SaveInternNewsEntity() {
    if (this.InternNewsEntity.Id === undefined || this.InternNewsEntity.Id === null || this.InternNewsEntity.Id == "") {
      this.InternNewsEntity.Id = '00000000-0000-0000-0000-000000000000';
      this.InternNewsService.Create(this.InternNewsEntity).subscribe(p => {
        this.InternNewsEntity = p;
        this.InternNewsEntity.Id = p.Id;
        this.toastr.ShowSuccess();
      }, e => {
        this.toastr.ShowError(e);
      });
    } else {
      this.InternNewsService.Update(this.InternNewsEntity).subscribe(p => {
            this.toastr.ShowSuccess();
          }, e => {
            this.toastr.ShowError(e);
      });
    }
  }
  /*SaveInternNewsEntity(InternNewsEntity: InternNewsEntity) {
    if (InternNewsEntity.Id === undefined || InternNewsEntity.Id === null || InternNewsEntity.Id == "") {
      InternNewsEntity.Id = '00000000-0000-0000-0000-000000000000';
      this.InternNewsService.Create(InternNewsEntity).subscribe(p => {
        this.toastr.ShowSuccess();
      }, e => {
        this.toastr.ShowError(e);
      });
    } else {
      this.InternNewsService.Update(InternNewsEntity).subscribe(p => {
        this.toastr.ShowSuccess();
      }, e => {
        this.toastr.ShowError(e);
      });
    }
  }*/
}
