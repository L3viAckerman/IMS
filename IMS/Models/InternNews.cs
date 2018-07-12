using System;
using System.Collections.Generic;

namespace IMS.Models
{
    public partial class InternNews
    {
        public InternNews()
        {
            InternFollows = new HashSet<InternFollow>();
        }

        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public Guid? CompanyId { get; set; }
        public string CreatedDate { get; set; }
        public string UpdatedDate { get; set; }
        public string ExpiredDate { get; set; }

        public Company Company { get; set; }
        public ICollection<InternFollow> InternFollows { get; set; }
    }
}
