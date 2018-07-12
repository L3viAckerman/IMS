import {FilterEntity} from '../Filter.Entity';
import {InternNewsEntity} from '../InternNews/InternNews.Entity';
import {StudentEntity} from '../Student/Student.Entity';

export class SearchInternFollowEntity extends FilterEntity {
  Status: number;
  InternNewsId: string;
  StudentName: string;
  StudentId: string;

  constructor(InternFollow?: any) {
    super(InternFollow);
    if (InternFollow != null) {
      this.InternNewsId = InternFollow.InternNews == null ? null : InternFollow.InternNews.Id;
      this.StudentName = InternFollow.Student == null ? null : InternFollow.Student.Name;
      this.StudentId = InternFollow.Student == null ? null : InternFollow.Student.Id;
      this.Status = InternFollow.Status == null ? null : InternFollow.Status;
    }
  }
}
