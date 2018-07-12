using IMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MInternshipCourse
{
    public class SearchInternshipCourseEntity : FilterEntity
    {
        public Guid? StudentId { get; set; }
        public string StudentName { get; set; }
        public Guid? CompanyId { get; set; }
        public Guid? LecturerId { get; set; }
        public IQueryable<InternshipCourse> ApplyTo(IQueryable<InternshipCourse> InternshipCourses)
        {
            if (StudentId.HasValue)
                InternshipCourses = InternshipCourses.Where(m => m.StudentId.Equals(StudentId.Value));
            if (CompanyId.HasValue)
                InternshipCourses = InternshipCourses.Where(m => m.CompanyId.Equals(CompanyId.Value));
            if (LecturerId.HasValue)
                InternshipCourses = InternshipCourses.Where(m => m.LecturerId.Equals(LecturerId.Value));
            return InternshipCourses;
        }
    }
}
