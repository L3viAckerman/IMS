import { Entity } from "../Entity";

export class UserEntity extends Entity {
  //Id: string;
  Username: string;
  Role: number;
  Password: string;
  AdminEntity: AdminEntity;
  constructor(User: any = null) {
    super();
    this.IsEdit = false;
    this.IsActive = false;
    this.IsSelected = false;
  }
}

export class AdminEntity extends Entity {
  Id: string;
  Fullname: string;
  Organization: number;

  constructor(User: any = null) {
    super();
    this.IsEdit = false;
    this.IsActive = false;
    this.IsSelected = false;
  }
}


