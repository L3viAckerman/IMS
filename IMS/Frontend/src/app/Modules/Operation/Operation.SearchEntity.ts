import {FilterEntity} from '../Filter.Entity';

export class SearchOperationEntity extends FilterEntity {
  Role: string;
  Name: string;
  Link: string;

  constructor(Operation?: any) {
    super(Operation);
    this.Role = Operation == null ? null : Operation.Role;
    this.Name = Operation == null ? null : Operation.Name;
    this.Link = Operation == null ? null : Operation.Link;

  }

}
