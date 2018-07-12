import { Entity } from "../Entity";

export class InternReportEntity extends Entity {
  //Id: string;
  InternshipCourseId: string;
  Content: string;
  PartnerScore: number;
  LecturerScore: number;
  //CompanyId: string;
  LecturerComment: string;
  CompanyComment: string;
  constructor(User: any = null) {
    super();
    this.IsEdit = false;
    this.IsActive = false;
    this.IsSelected = false;
  }
}



