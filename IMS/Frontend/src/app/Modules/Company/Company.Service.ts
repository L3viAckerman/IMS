import { Injectable } from '@angular/core';
import { CompanyEntity } from "./Company.Entity";
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../HttpService';

@Injectable()
export class CompanyService extends HttpService<CompanyEntity> {
  public CompanyEntity: CompanyEntity;
  constructor(private HttpClient: HttpClient) {
    super(HttpClient);
    this.url = "api/Companies";
  }
}
