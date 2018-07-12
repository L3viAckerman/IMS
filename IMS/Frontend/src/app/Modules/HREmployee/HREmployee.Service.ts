import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../HttpService';
import { HREmployeeEntity} from './HREmployee.Entity';

@Injectable()
export class HREmployeeService extends HttpService<HREmployeeEntity> {
  public HREmployeeEntity: HREmployeeEntity;
  constructor(private HttpClient: HttpClient) {
    super(HttpClient);
    this.url = "api/HrEmployees";
  }
}
