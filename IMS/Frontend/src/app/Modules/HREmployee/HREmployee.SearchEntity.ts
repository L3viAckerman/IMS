import { FilterEntity } from "../Filter.Entity";
import {HREmployeeEntity} from './HREmployee.Entity';

export class SearchHREmployeeEntity extends FilterEntity {
  Name: string;
  Id: string;
  CompanyId: string;

  constructor(SearchHREmployee?: any) {
    super(SearchHREmployee);
    this.Name = SearchHREmployee == null ? null : SearchHREmployee.HREmployeeEntity.Name;
    this.CompanyId = SearchHREmployee == null ? null : SearchHREmployee.HREmployeeEntity.CompanyId;
    this.Id = SearchHREmployee == null ? null : SearchHREmployee.HREmployeeEntity.Id;
  }
}
