import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../HttpService';
import {OperationEntity} from './Operation.Entity';

@Injectable()
export class OperationService extends HttpService<OperationEntity> {
  constructor(private Http: HttpClient) {
    super(Http);
    this.url = "api/Operation";
  }
}

