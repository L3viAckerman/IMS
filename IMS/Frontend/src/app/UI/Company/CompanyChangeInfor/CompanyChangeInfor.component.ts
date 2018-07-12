import {Component, Input, Output, OnInit, EventEmitter, ViewContainerRef} from '@angular/core';
import {BottomToastsManager} from '../../../Shared/CustomToaster';
import {InternFollowService} from '../../../Modules/InternFollow/InternFollow.Service';
import {CommonComponent} from '../../../app.component';
import {CompanyEntity} from '../../../Modules/Company/Company.Entity';
import {CompanyService} from '../../../Modules/Company/Company.Service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../../Modules/User/User.Service';
import {UserEntity} from '../../../Modules/User/User.Entity';


@Component({
  selector: 'App-CompanyHome',
  templateUrl: './CompanyChangeInfor.component.html',
  styleUrls: ['./CompanyChangeInfor.component.css'],
  providers: [CompanyService, BottomToastsManager, CompanyService,UserService ]
})
export class CompanyChangeInforComponent extends CommonComponent<CompanyEntity> {
  public  CompanyEntity: CompanyEntity;
  constructor(public CompanySevice: CompanyService, toastr: BottomToastsManager, vcr: ViewContainerRef,public route: ActivatedRoute, public UserService: UserService) {
    super(CompanySevice, toastr, vcr);
    this.route.params.subscribe((params) => {
      CompanySevice.GetId(params.CompanyId).subscribe(p => {
        this.CompanyEntity = p;
        console.log(p);
      })
    });
  }


}
