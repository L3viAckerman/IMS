import {Component, Input, Output, OnInit, EventEmitter, ViewContainerRef} from '@angular/core';
import {BottomToastsManager} from '../../../Shared/CustomToaster';

import {CommonComponent} from '../../../app.component';
import {InternReportService} from '../../../Modules/InternReport/InternReport.Service';
import {InternReportEntity} from '../../../Modules/InternReport/InternReport.Entity';

@Component({
  selector: 'App-InternReportTerm',
  templateUrl: './InternReportTerm.component.html',
  styleUrls: ['./InternReportTerm.component.css'],
  providers: [InternReportService, BottomToastsManager]
})
export class InternReportTermComponent extends CommonComponent<InternReportEntity> {
  constructor(public InternReportService: InternReportService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(InternReportService, toastr, vcr);
    this.InternReportService.Get().subscribe(I => {
    });
  }
}
