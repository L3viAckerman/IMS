import {Entity} from "../Entity";
import { StudentEntity } from "../Student/Student.Entity";
import { LecturerEntity } from "../Lecturer/Lecturer.Entity";

export class LecturerFollowEntity extends Entity{
    //Id : string;
    StudentId : string;
    LecturerId : string;
    Status : number;
    Start : Date;
    End : Date;
    Lecturer : LecturerEntity;
    Student : StudentEntity;
    constructor(LecturerFollowEntity : any)
    {
        super();
        this.IsEdit = false;
        this.IsActive = false;
        this.IsSelected = false;
    }
}
