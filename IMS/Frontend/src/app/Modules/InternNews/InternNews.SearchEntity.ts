import { FilterEntity } from "../Filter.Entity";

export class SearchInternNewsEntity extends FilterEntity {
  Title: string;
  Id: string;
  CompanyId: string;

  constructor(InternNews: any = null) {
    super(InternNews);
    this.Title = InternNews == null ? null : InternNews.Title;
    this.Id = InternNews == null ? null : InternNews.Id;
    this.CompanyId = InternNews == null ? null :InternNews.CompanyId;
  }

}
