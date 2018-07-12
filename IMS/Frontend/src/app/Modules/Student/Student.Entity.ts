import { Entity } from "../Entity";
import {InternNewsEntity} from '../InternNews/InternNews.Entity';

export class StudentEntity extends Entity {
  //Id: string;
  Class: string;
  Department: string;
  Address: string;
  FullName: string;
  Birthday: Date;
  Gpa: string;
  Vnumail: string;
  GraduationYear: string;
  PersonalMail: string;
  Skype: string;
  Facebook: string;
  Phone: string;
  LanguageSkill: string;
  constructor(User: any = null) {
    super();
    this.IsEdit = false;
    this.IsActive = false;
    this.IsSelected = false;
  }
}



