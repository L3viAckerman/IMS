import {FilterEntity} from '../Filter.Entity';

export class SearchLecturerFollowEntity extends FilterEntity {
  Studentname: string;
  StudentId: string;
  MSSV: string;
  Status?: number;
  LectureId: string;

  constructor(LecturerFollowEntity: any) {
    super(LecturerFollowEntity);
    if (LecturerFollowEntity != null) {
      this.Studentname = LecturerFollowEntity == null ? null : LecturerFollowEntity.StudentName;
      this.MSSV = LecturerFollowEntity == null ? null : LecturerFollowEntity.MSSV;
      this.Status = LecturerFollowEntity == null ? null : LecturerFollowEntity.Status;
      this.StudentId = LecturerFollowEntity == null ? null : LecturerFollowEntity.StudentId;
      this.LectureId = LecturerFollowEntity == null ? null : LecturerFollowEntity.LectureId;
    }
  }
}
