import {Component, Input, Output, OnInit, EventEmitter, ViewContainerRef} from '@angular/core';
import {BottomToastsManager} from '../../../Shared/CustomToaster';
import {InternFollowService} from '../../../Modules/InternFollow/InternFollow.Service';
import {CommonComponent} from '../../../app.component';
import {CompanyEntity} from '../../../Modules/Company/Company.Entity';
import {CompanyService} from '../../../Modules/Company/Company.Service';


@Component({
  selector: 'App-CompanyHome',
  templateUrl: './CompanyChangePassword.component.html',
  styleUrls: ['./CompanyChangePassword.component.css'],
  providers: [CompanyService, BottomToastsManager, InternFollowService]
})
export class CompanyChangePasswordComponent extends CommonComponent<CompanyEntity> {
  constructor(public CompanySevice: CompanyService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(CompanySevice, toastr, vcr);
  }

}
