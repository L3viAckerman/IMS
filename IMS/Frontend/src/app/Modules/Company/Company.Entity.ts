import { Entity } from "../Entity";

export class CompanyEntity extends Entity {
  //Id: string;
  Name: string;
  Address: string;
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
