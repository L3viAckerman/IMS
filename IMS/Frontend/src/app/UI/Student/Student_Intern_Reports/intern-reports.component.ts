import {Component, Input, Output, OnInit, EventEmitter, ViewContainerRef} from '@angular/core';
import {BottomToastsManager} from '../../../Shared/CustomToaster';

import {CommonComponent} from '../../../app.component';
import {InternReportService} from '../../../Modules/InternReport/InternReport.Service';
import {InternReportEntity} from '../../../Modules/InternReport/InternReport.Entity';
import {SearchUserEntity} from '../../../Modules/User/User.SearchEntity';
import {SearchInternReportEntity} from '../../../Modules/InternReport/InternReport.SearchEntity';

@Component ({
  selector: 'App-InternReports',
  templateUrl: './intern-reports.component.html',
  styleUrls: ['./intern-reports.component.css'],
  providers: [InternReportService, BottomToastsManager]
})
export class InternReportsComponent extends CommonComponent<InternReportEntity> {
  public SearchInternReportEntity: SearchInternReportEntity;
  constructor(public InternReportService: InternReportService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(InternReportService, toastr, vcr);
    this.SearchInternReportEntity = new SearchInternReportEntity();
    this.InternReportService.Get().subscribe(I => {
    });
  }
}
