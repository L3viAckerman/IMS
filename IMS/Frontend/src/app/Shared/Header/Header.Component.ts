import {Component} from "@angular/core";
import {MenuModel} from "../../menu-model";
// import {AuthService} from "../../Modules/Auth/Auth.Service";
import {UserEntity} from "../../Modules/User/User.Entity";
import {UserService} from "../../Modules/User/User.Service";
import {LectureHomeComponent} from '../../UI/Lecturer/Lecturer_Home/LectureHome.component';
import {CompanyAnInternNewsComponent} from '../../UI/Company/CompanyAnInternNews/CompanyAnInternNews.component';

// import {LayerAccessControlEntity} from "../../Modules/LayerAccessControl/LayerAccessControl.Entity";

@Component({
  selector: 'public-header',
  templateUrl: './Header.Component.html',
  styleUrls: ['./Header.Component.css']
})
export class HeaderComponent {
  MenuList: MenuModel[];
  UserEntity: UserEntity;

  constructor(private UserService: UserService) {
    this.UserEntity = UserService.Current();
    this.MenuList = Array<MenuModel>();
    let Home = new MenuModel("Trang chủ", "Home"); this.MenuList.push(Home);
    /*let List = new MenuModel("Danh mục tài khoản", "List"); this.MenuList.push(List);
    let User = new MenuModel("Tài khoản", "Users"); List.addSub(User);
    let Student = new MenuModel("Sinh viên", "Students"); List.addSub(Student);
    let Lecturer = new MenuModel("Giảng viên", "Lecturers"); List.addSub(Lecturer);
    let Admin = new MenuModel("Quản trị viên", "Admins"); List.addSub(Admin);
    let HrEmployee = new MenuModel("Nhân viên tuyển dụng", "HrEmployees"); List.addSub(HrEmployee);

    let Internship = new MenuModel("Thực tập", "Internship"); this.MenuList.push(Internship);
    let InternNews = new MenuModel("Tin thực tập", "InternNews"); Internship.addSub(InternNews);
    let InternNewsManagement = new MenuModel("Tin thực tập", "InternNewsManagement"); Internship.addSub(InternNewsManagement);


    let InternshipCourses = new MenuModel("Kì thực tập", "InternshipCourses"); this.MenuList.push(InternshipCourses);

    let Report = new MenuModel("Báo cáo", "Report"); this.MenuList.push(Report);
    let Companies = new MenuModel("Công ty", "Companies"); this.MenuList.push(Companies);
    let StudentProfile = new MenuModel("Thông tin sinh viên", "StudentProfile"); this.MenuList.push(StudentProfile);
    let InternReports = new MenuModel("Báo cáo thực tập", "InternReports"); this.MenuList.push(InternReports);
    let InternReportFinnal = new MenuModel("Kết quả cuối kì", "InternReportFinnal"); InternReports.addSub(InternReportFinnal);
    let InternReportTerm = new MenuModel("Báo cáo định kỳ", "InternReportTerm"); InternReports.addSub(InternReportTerm);
    let LectureHome = new MenuModel("Côngty", "Lecture/Home"); this.MenuList.push(LectureHome);*/
    //let CompanyHome = new MenuModel("Home", "Company/Home"); this.MenuList.push(CompanyHome);

    let Company = new MenuModel("Quản lý thông tin", "Companies"); this.MenuList.push(Company);
    let List = new MenuModel("Quản lý bài đăng", "Company/ListInternNews"); this.MenuList.push(List);
    let Create = new MenuModel("Thêm bài đăng", "CreateAnInternNews"); List.addSub(Create);
  }

}
