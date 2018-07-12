import { Entity } from "../Entity";

export class InternNewsEntity extends Entity {
  Title: string;
  Content: string;
  CreatedDate: string;
  ExpiredDate: string;
  CompanyId: string;
  UpdatedDate: string;
  constructor(InternNews: any = null) {
    super();
    this.IsEdit = false;
    this.IsActive = false;
    this.IsSelected = false;
  }
}



