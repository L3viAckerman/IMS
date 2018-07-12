import { Entity } from "../Entity";

export class HREmployeeEntity extends Entity {
  //Id: string;
  Name: string;
  CompanyId: string;
  Display: string;
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
