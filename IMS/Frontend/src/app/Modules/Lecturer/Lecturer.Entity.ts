import {Entity } from "../Entity";

export class LecturerEntity extends Entity {
    //Id : string;
    Phone: string;
    Vnumail : string;
    Gmail : string;
    Note: string;
    Fullname: string;
    constructor (LecturerEntity? : any){
        super();
        this.IsEdit = false;
        this.IsActive = false;
        this.IsSelected = false;
    }
}
