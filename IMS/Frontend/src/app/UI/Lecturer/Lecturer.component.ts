import { Component, Input, Output, OnInit, EventEmitter, ViewContainerRef } from '@angular/core';
import { BottomToastsManager } from '../../Shared/CustomToaster';
import { InternReportService } from '../../Modules/Lecturer/intern-report.service';
import { debug } from 'util';
import { CommonComponent } from '../../app.component';
import { LecturerEntity } from '../../Modules/Lecturer/Lecturer.Entity';
import { SearchLecturerEntity } from '../../Modules/Lecturer/Lecturer.SearchEntity';

@Component({
  selector: 'App-Lecturer',
  templateUrl: './Lecturer.Component.html',
  styleUrls: ['./Lecturer.Component.css'],
  providers: [InternReportService, BottomToastsManager]
})
export class LecturerComponent extends CommonComponent<LecturerEntity> {
  SearchLecturerEntity: SearchLecturerEntity;
  constructor(LecturerService: InternReportService, toastr: BottomToastsManager, vcr: ViewContainerRef) {
    super(LecturerService, toastr, vcr);
    this.SearchLecturerEntity = new SearchLecturerEntity();
    this.Search(this.SearchLecturerEntity);
  }
}
