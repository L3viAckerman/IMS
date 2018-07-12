import {FilterEntity} from '../Filter.Entity';

export class SearchStudentEntity extends FilterEntity {
  FullName: string;

  constructor(Student: any = null) {
    super(Student);
    this.FullName = Student == null ? null : Student.FullName;
  }

}
