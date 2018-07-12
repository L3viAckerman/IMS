using IMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MInternFollow
{
    public class SearchInternFollowEntity : FilterEntity
    {
        public Guid? StudentId { get; set; }
        public Guid? InternNewsId { get; set; }
        public int Status { get; set; }
        public string StudentName { get; set; }
        public IQueryable<InternFollow> ApplyTo(IQueryable<InternFollow> internFollows)
        {
            if (InternNewsId != null)
                internFollows = internFollows.Where(s => s.InternNewsId == InternNewsId);
            if (StudentId != null)
                internFollows = internFollows.Where(s => s.StudentId == StudentId);
            if (!string.IsNullOrEmpty(StudentName))
                internFollows = internFollows.Where(s => s.Student.FullName.ToLower().Equals(this.StudentName.ToLower()));
            return internFollows;
        }
    }
}
