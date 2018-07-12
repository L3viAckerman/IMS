import { Entity } from "../Entity";
import {InternNewsEntity} from '../InternNews/InternNews.Entity';

export class OperationEntity extends Entity {
  //Id: string;
  Name: string;
  Link: string;
  Role: number;
  Method: string;
  constructor(User: any = null) {
    super();
    this.IsEdit = false;
    this.IsActive = false;
    this.IsSelected = false;
  }
}



