import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {UserComponent} from './UI/User/user.component';
import {StudentComponent} from './UI/Student/Student.component';
import {InternNewsComponent} from './UI/InternNews/InternNews.component';
import {CompanyComponent} from './UI/Company/company.component';
//import { InternshipResultComponent } from "./UI/InternshipResult/InternshipResult.component";
import {LecturerProfileComponent} from './UI/LecturerProfile/LecturerProfile.component';
import {ChangingPasswordComponent} from './UI/ChangingPassword/ChangingPassword.component';
import {LecturerComponent} from './UI/Lecturer/Lecturer.component';
import {AdminComponent} from './UI/Admin/Admin.component';
import {InternReportTermComponent} from './UI/Student/Student_Intern_Report_Term/InternReportTerm.component';
import {InternReportsComponent} from './UI/Student/Student_Intern_Reports/intern-reports.component';

import {StudentProfileComponent} from './UI/Student/StudentProfile/StudentProfile.component';

import {InternReportFinnalComponent} from './UI/Student/Student_Intern_Report_Finnal/InternReportFinnal.component';
import {LectureHomeComponent} from './UI/Lecturer/Lecturer_Home/LectureHome.component';
import {CompanyHomeComponent} from './UI/Company/CompanyHome/CompanyHome.component';
import {CompanyChangeHRInforComponent} from './UI/Company/CompanyChangeHRInfor/CompanyChangeHRInfor.component';
import {CompanyChangeInforComponent} from './UI/Company/CompanyChangeInfor/CompanyChangeInfor.component';
import {CompanyListStudentsComponent} from './UI/Company/CompanyListStudents/CompanyListStudents.component';
import {CompanyStudentReportsComponent} from './UI/Company/CompanyStudentReports/CompanyStudentReports.component';
import {CompanyStudentReportInTermComponent} from './UI/Company/CompanyStudentReportInTerm/CompanyStudentReportInTerm.component';
import {CompanyStudentReportFinnalComponent} from './UI/Company/CompanyStudentReportIFinnal/CompanyStudentReportFinnal.component';

import {StudentAnInternNewComponent} from './UI/Student/Student_An_InternNew/StudentAnInternNew.component';
import {CompanyCreateAnInternNewsComponent} from './UI/Company/CompanyCreateAnInternNews/CompanyCreateAnInternNews.component';
import {CompanyListInternNewsComponent} from './UI/Company/CompanyListInternNews/CompanyListInternNews.component';
import {StudentInternNewsComponent} from './UI/Student/Student_InternNews/StudentInternNews.component';
import {CompanyAnInternNewsComponent} from './UI/Company/CompanyAnInternNews/CompanyAnInternNews.component';
import {StudentListInternNewsComponent} from './UI/Student/StudentListInternNews/StudentListInternNews.component';
import {CompanyListStudentInAnInternNewsComponent} from './UI/Company/CompanyListStudentInAnInternNews/CompanyListStudentInAnInternNews.component';


const routes: Routes = [

  {path: 'App', component: AppComponent},
  {path: 'Users', component: UserComponent},
  {path: 'Students', component: StudentComponent},
  {path: 'StudentProfile', component: StudentProfileComponent},
  {path: 'InternNews', component: InternNewsComponent},
  {path: 'Companies', component: CompanyHomeComponent},
  {path: 'Lecturers', component: LecturerComponent},
  {path: 'Admins', component: AdminComponent},

  //{ path: 'InternshipResult/:StudentId', component: InternshipResultComponent },
  //{ path: 'InternshipResult', component: InternshipResultComponent },

  {path: 'LecturerProfile', component: LecturerProfileComponent},
  {path: 'LecturerProfile/:LecturerId', component: LecturerProfileComponent},
  {path: 'ChangePassword', component: ChangingPasswordComponent},
  {path: 'ChangePassword/:UserId', component: ChangingPasswordComponent},
  {path: 'InternReports', component: InternReportsComponent},
  {path: 'StudentProfile/:StudentId', component: StudentProfileComponent},
  {path: 'InternReportFinnal', component: InternReportFinnalComponent},
  {path: 'InternReportTerm', component: InternReportTermComponent},
  {path: 'StudentInrernNew/:InternNewsId', component: StudentAnInternNewComponent},
  {path: 'StudentInrernNews', component: StudentInternNewsComponent},
  {path: 'StudentListInternNews', component: StudentListInternNewsComponent},
  {path: 'ChangeHrInfor/:HREmployeeId', component: CompanyChangeHRInforComponent},
  {path: 'ChangeCompanyInfor/:CompanyId', component: CompanyChangeInforComponent},
  {path: 'CreateAnInternNews', component: CompanyCreateAnInternNewsComponent},
  {path: 'Company/ListInternNews', component: CompanyListInternNewsComponent},
  {path: 'Company/:InternNewsId', component: CompanyAnInternNewsComponent},
  {path: 'Company/:InternNewsId/ListStudent', component: CompanyListStudentInAnInternNewsComponent},
  {
    path: '**',
    redirectTo: 'Companies',
  }

];
export const Routing = RouterModule.forRoot(routes);
