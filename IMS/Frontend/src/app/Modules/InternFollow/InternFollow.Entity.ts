 import {Entity} from "../Entity";
import { InternNewsEntity } from "../InternNews/InternNews.Entity";
import { StudentEntity } from "../Student/Student.Entity";


export class InternFollowEntity extends Entity
{
    //Id : string;
    StudentId :string;
    InternNewsId :string;
    Status : number;
    InternNewsEntity :InternNewsEntity;
    Student :StudentEntity;
    constructor(InternFollow: any = null) {
        super();
        this.IsEdit = false;
        this.IsActive = false;
        this.IsSelected = false;
    }
}
