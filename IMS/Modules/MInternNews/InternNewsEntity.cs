using System;
using System.Collections.Generic;
using System.Data.SqlTypes;
using System.Linq;
using System.Threading.Tasks;
using IMS.Models;
using IMS.Modules.MCompany;
using IMS.Modules.MInternFollow;

namespace IMS.Modules.MInternNews
{
    public class InternNewsEntity
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public Guid? CompanyId { get; set; }
        public string CreatedDate { get; set; }
        public string UpdatedDate { get; set; }
        public string ExpiredDate { get; set; }
        public CompanyEntity CompanyEntity { get; set; }
        public List<InternFollowEntity> InternFollowEntities { get; set; }
        public InternNewsEntity()
        {
            this.InternFollowEntities = new List<InternFollowEntity>();
        }
        public InternNewsEntity(InternNews internNews, params object[] args)
        {
            this.Id = internNews.Id;
            this.Title = internNews.Title;
            this.Content = internNews.Content;
            this.CompanyId = internNews.CompanyId;
            this.CreatedDate = internNews.CreatedDate;
            this.ExpiredDate = internNews.ExpiredDate;
            this.UpdatedDate = internNews.UpdatedDate;
            foreach (var arg in args)
            {
                if (arg is Company)
                    this.CompanyEntity = internNews.Company == null ? null : new CompanyEntity(arg as Company);
                if (arg is ICollection<InternFollow>)
                    this.InternFollowEntities = (arg as ICollection<InternFollow>).Select(ir => new InternFollowEntity(ir)).ToList();
            }
        }
        public InternNews ToModel(InternNews internNews = null)
        {
            if(internNews == null)
            {           
                internNews = new InternNews();
                internNews.Id = Guid.NewGuid();
            }
            internNews.CreatedDate = this.CreatedDate;
            internNews.ExpiredDate = this.ExpiredDate;
            internNews.UpdatedDate = this.UpdatedDate;
            internNews.CompanyId = this.CompanyId;
            internNews.Title = this.Title;
            internNews.Content = this.Content;
            return internNews;
        }

    }
}
