import { FilterEntity } from "../Filter.Entity";
// Search Entity này chưa xong, cần xác định phương thức tìm kiếm theo trường nào?
export class SearchInternReportEntity extends FilterEntity {
  CompanyId: string = null;
  CourseId: string = null;
  constructor(InternReport?: any) {
    super(InternReport);
    this.CompanyId = InternReport == null ? null : InternReport.InternReportEntity.CompanyId;
    this.CourseId = InternReport == null ? null : InternReport.InternReportEntity.CourseId;

  }

}
