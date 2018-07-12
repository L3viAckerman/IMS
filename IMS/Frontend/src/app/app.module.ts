// Import Component share
import {AppComponent} from './app.component';
import {HeaderComponent} from './Shared/Header/Header.Component';
import {BodyComponent} from './Shared/Body/Body.Component';
import {DropdownComponent} from './Shared/MaterialComponent/dropdown/dropdown.component';
import {PagingComponent} from './Shared/MaterialComponent/paging/paging.component';
import {ModalComponent} from './Shared/MaterialComponent/modal/modal.component';
import {MenuPurchaseComponent} from './Shared/MaterialComponent/MenuPurchase/menupurchase.component';
// import {TooltipDirective} from 'ng2-tooltip-directive/components';
import {NgbDateFRParserFormatter} from './Shared/DateParseFormatter';
import {NgbDateParserFormatter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {OnlyNumber} from './Shared/OnlyNumberDirectivce';
//library
import {BottomToastsManager} from './Shared/CustomToaster';
import {AuthGuard} from './Auth.Guard.Service';
import {PortletComponent} from './Shared/MaterialComponent/Portlet/Portlet.Component';
import {ExcelComponent} from './Shared/MaterialComponent/Excel/Excel.component';
import {TagsinputComponent} from './Shared/MaterialComponent/tagsinput/tagsinput.component';
import {InputfileComponent} from './Shared/MaterialComponent/inputfile/inputfile.component';
import {AutoCompleteModule} from 'primeng/components/autocomplete/autocomplete';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {ButtonModule} from 'primeng/components/button/button';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import {DialogModule} from 'primeng/components/dialog/dialog';
import {TreeModule} from 'primeng/components/tree/tree';
import {RatingModule} from 'primeng/components/rating/rating';
import {AccordionModule} from 'primeng/components/accordion/accordion';
import {ContextMenuModule} from 'primeng/components/contextmenu/contextmenu';
import {InputDiscussionComponent} from './Shared/MaterialComponent/InputDiscussion/InputDiscussion.component';
// import { DiscussionComponent } from "./Modules/Discussion/Discussion.Component";
// import { DiscussionService } from "app/Modules/Discussion/Discussion.Service";
// import { TimeAgoPipe } from "./Modules/Discussion/TimeAgo.Pipe";
// import { DateTimePickerModule } from 'ng-pick-datetime';
import {CurrencyMaskModule} from 'ng2-currency-mask';
import {CURRENCY_MASK_CONFIG} from 'ng2-currency-mask/src/currency-mask.config';
import {OrderModule} from 'ngx-order-pipe';
import {CheckboxModule} from 'primeng/components/checkbox/checkbox';
import {NgxEditorModule} from 'ngx-editor';
import {RadioButtonModule} from 'primeng/components/radiobutton/radiobutton';
//import { ChartModule } from 'angular2-highcharts';
import {ChartModule} from 'angular2-highcharts';
import {HighchartsStatic} from 'angular2-highcharts/dist/HighchartsService';
//Service mua sam
///
// import {[MODULE]Service} from "./Modules/[MODULE]/[MODULE].Service";
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConfirmationPopoverModule} from 'angular-confirmation-popover';
import {TreeTableModule} from 'primeng/components/treetable/treetable';
import {MyCurrencyPipe} from './Shared/Currency/currency.pipe';
import {MyCurrencyFormatterDirective} from './Shared/Currency/currency-formatter.directive';
import {CustomCurrencyConfig} from './Shared/CustomCurrencyConfig';
import {Routing} from './Route';
import {UserService} from './Modules/User/User.Service';
import {PanelComponent} from './Shared/MaterialComponent/panel/Panel.Component';
import {TooltipDirective} from 'ngx-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './UI/User/user.component';
import {StudentComponent} from './UI/Student/Student.component';
import {InternNewsComponent} from './UI/InternNews/InternNews.component';
import {CompanyComponent} from './UI/Company/company.component';
import {HttpClient} from '@angular/common/http/src/client';
import {HttpService} from './Modules/HttpService';

//import { InternshipResultComponent } from './UI/InternshipResult/InternshipResult.component';
import {StudentService} from './Modules/Student/Student.Service';
import {LecturerProfileComponent} from './UI/LecturerProfile/LecturerProfile.component';
import {ChangingPasswordComponent} from './UI/ChangingPassword/ChangingPassword.component';
import {LecturerComponent} from './UI/Lecturer/Lecturer.component';
import {AdminComponent} from './UI/Admin/Admin.component';
import {InternReportTermComponent} from './UI/Student/Student_Intern_Report_Term/InternReportTerm.component';
import {StudentProfileComponent} from './UI/Student/StudentProfile/StudentProfile.component';
import {InternReportFinnalComponent} from './UI/Student/Student_Intern_Report_Finnal/InternReportFinnal.component';
import {InternReportsComponent} from './UI/Student/Student_Intern_Reports/intern-reports.component';
import {LectureHomeComponent} from './UI/Lecturer/Lecturer_Home/LectureHome.component';
import {CompanyHomeComponent} from './UI/Company/CompanyHome/CompanyHome.component';
import {CompanyChangeHRInforComponent} from './UI/Company/CompanyChangeHRInfor/CompanyChangeHRInfor.component';
import {CompanyChangeInforComponent} from './UI/Company/CompanyChangeInfor/CompanyChangeInfor.component';
import {CompanyListStudentsComponent} from './UI/Company/CompanyListStudents/CompanyListStudents.component';
import {CompanyStudentReportsComponent} from './UI/Company/CompanyStudentReports/CompanyStudentReports.component';
import {CompanyStudentReportInTermComponent} from './UI/Company/CompanyStudentReportInTerm/CompanyStudentReportInTerm.component';
import {CompanyStudentReportFinnalComponent} from './UI/Company/CompanyStudentReportIFinnal/CompanyStudentReportFinnal.component';
import {StudentInternNewsComponent} from './UI/Student/Student_InternNews/StudentInternNews.component';
import {StudentAnInternNewComponent} from './UI/Student/Student_An_InternNew/StudentAnInternNew.component';
import {StudentInternFollowsComponent} from './UI/Student/Student_InternFollows/StudentInternFollows.component';
import {CompanyCreateAnInternNewsComponent} from './UI/Company/CompanyCreateAnInternNews/CompanyCreateAnInternNews.component';
import {CompanyListInternNewsComponent} from './UI/Company/CompanyListInternNews/CompanyListInternNews.component';
import {CompanyAnInternNewsComponent} from './UI/Company/CompanyAnInternNews/CompanyAnInternNews.component';
import {CompanyStudentListInternReportComponent} from './UI/Company/CompanyStudentListInternReport/CompanyStudentListInternReport.component';
import {StudentListInternNewsComponent} from './UI/Student/StudentListInternNews/StudentListInternNews.component';
import {CompanyListStudentInAnInternNewsComponent} from './UI/Company/CompanyListStudentInAnInternNews/CompanyListStudentInAnInternNews.component';
import {FooterComponent} from './Shared/Footer/Footer.Component';
import {StudentAnInternFollowsComponent} from './UI/Student/Student_An_InternFollows/StudentAnInternFollows.component';


// import {NgxEditorModule} from 'ngx-editor';
//[IMPORT MODULE]
// import {[MODULE]Component} from "./Modules/[MODULE]/[MODULE].Component";
export declare let require: any;

export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/map');
  dd(hc);

  return hc;
}

//
// import {[MODULE]Component} from "./Modules/[MODULE]/[MODULE].Component";
//[END]
//[IMPORT MODULE]
// import {[MODULE]Service} from "./Modules/[MODULE]/[MODULE].Service";
//[END]

@NgModule({
  imports: [ToastModule.forRoot(), Routing, BrowserModule, FormsModule, HttpClientModule, BrowserAnimationsModule, ReactiveFormsModule, NgbModule.forRoot(),
    ConfirmationPopoverModule.forRoot(), InputTextModule, CalendarModule, ButtonModule, DataTableModule, DialogModule, TreeModule, RatingModule,
    AccordionModule, ContextMenuModule, CurrencyMaskModule, OrderModule, AutoCompleteModule, TabViewModule, CodeHighlighterModule, NgxEditorModule,
    DropdownModule, CheckboxModule, ChartModule, RadioButtonModule, TreeTableModule
  ],
  declarations: [AppComponent, HeaderComponent, BodyComponent, PagingComponent, DropdownComponent, ExcelComponent, TagsinputComponent, InputfileComponent, ModalComponent, MenuPurchaseComponent,
    InputDiscussionComponent, PortletComponent, PanelComponent, OnlyNumber, MyCurrencyPipe, MyCurrencyFormatterDirective,
    UserComponent, InternReportFinnalComponent, StudentInternNewsComponent, CompanyStudentReportFinnalComponent, LectureHomeComponent, CompanyHomeComponent,  CompanyStudentReportInTermComponent, CompanyListStudentsComponent, CompanyStudentReportsComponent, CompanyChangeInforComponent, CompanyChangeHRInforComponent, InternReportTermComponent, InternReportsComponent, StudentComponent, InternNewsComponent, CompanyComponent, LecturerComponent, StudentProfileComponent, LecturerProfileComponent, ChangingPasswordComponent, AdminComponent
    , InputfileComponent, StudentAnInternNewComponent, StudentInternFollowsComponent, CompanyCreateAnInternNewsComponent, CompanyListInternNewsComponent,  CompanyAnInternNewsComponent, CompanyStudentListInternReportComponent, StudentListInternNewsComponent, CompanyListStudentInAnInternNewsComponent,FooterComponent, StudentAnInternFollowsComponent,
  ],
  providers: [
    UserService,
    AuthGuard,
    HttpService,
    {
      provide: NgbDateParserFormatter,
      useClass: NgbDateFRParserFormatter
    },
    {provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyConfig},
    {
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    },
    // {
    //     provide: AuthService,
    //     useFactory: AuthFactory,
    //     deps: [Http, RoleService]
    // },

    BottomToastsManager, UserService,
    //[IMPORT MODULE] [
    //[MODULE]Service,

    //[MODULE]Service,
    //[END]
  ], schemas: [NO_ERRORS_SCHEMA],
  exports: [MyCurrencyFormatterDirective, MyCurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}


