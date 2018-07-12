using IMS.Modules.MUser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MInternshipCourse
{
    public interface IInternshipCourseService : ITransientService
    {
        long Count(UserEntity UserEntity, SearchInternshipCourseEntity SearchInternshipCourseEntity);
        List<InternshipCourseEntity> Get(UserEntity UserEntity, SearchInternshipCourseEntity SearchInternshipCourseEntity);
        InternshipCourseEntity GetByStudentId(UserEntity userEntity, Guid StudentId);
        InternshipCourseEntity Create(UserEntity UserEntity, InternshipCourseEntity internshipCourseEntity);
        InternshipCourseEntity Update(UserEntity UserEntity, Guid internshipCourseId, InternshipCourseEntity internshipCourseEntity);
        bool Delete(UserEntity UserEntity, Guid internshipCourseId);
    }
}
