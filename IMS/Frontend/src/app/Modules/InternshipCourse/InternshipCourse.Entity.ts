import {Entity } from "../Entity";
import { CompanyEntity } from "../Company/Company.Entity";
import { StudentEntity } from "../Student/Student.Entity";
import { InternReportEntity } from "../InternReport/InternReport.Entity";

export class InternshipCourseEntity extends Entity {
    //Id : string;
    StudentId : string;
    CompanyId : string;
    LectureId: string;
    Start : Date;
    End : Date;
    File : string;
    LecturerComment : string;
    CompanyComment  : string;
    CompanyEntity : CompanyEntity;
    StudentEntity: StudentEntity;
    InternReportEntities : Array<InternReportEntity>;
    constructor (InternshipCourseEntity : any = null){
        super();
        this.IsEdit = false;
        this.IsActive = false;
        this.IsSelected = false;
    }
}
