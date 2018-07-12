import { Entity } from "../Entity";

export class AdminEntity extends Entity {
  //Id: string;
  Fullname: string;
  Vnumail: string;
  Gmail: string;
  Phone: string;
  IsEdit: boolean;
  IsActive: boolean;
  IsSelected: boolean;

  constructor(Company: any = null) {
    super();
    this.IsEdit = false;
    this.IsActive = false;
    this.IsSelected = false;
  }
}
