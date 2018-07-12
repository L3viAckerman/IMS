using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMS.Models;
namespace IMS.Modules.MInternNews
{
    public class SearchInternNewsEntity : FilterEntity
    {
        public string Content { get; set; }
        public Guid? CompanyId { get; set; }
       
        public IQueryable<InternNews> ApplyTo(IQueryable<InternNews> internNews)
        {
            if (CompanyId.HasValue)
            {
                internNews = internNews.Where(u => u.CompanyId.Equals(CompanyId.Value));
            }
            if (!string.IsNullOrEmpty(Content))
            {
                internNews = internNews.Where(u => u.Content.ToLower().Contains(Content.ToLower()));
            }    
            return internNews;
        }
        
    }
}
