import {FilterEntity} from '../Filter.Entity';

export class SearchInternshipCourseEntity extends FilterEntity {
  StudentId: string;
  CompanyId: string;
  LectureId: string;

  constructor(InternshipCourseEntity?: any) {
    super(InternshipCourseEntity);
    this.StudentId = InternshipCourseEntity == null ? null : InternshipCourseEntity.InternshipCourseEntity.StudentId;
    this.CompanyId = InternshipCourseEntity == null ? null : InternshipCourseEntity.InternshipCourseEntity.CompanyId;
    this.LectureId = InternshipCourseEntity == null ? null : InternshipCourseEntity.InternshipCourseEntity.LectureId;
  }
}
