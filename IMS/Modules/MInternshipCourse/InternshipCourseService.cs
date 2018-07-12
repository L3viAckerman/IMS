using IMS.Models;
using IMS.Modules.MUser;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace IMS.Modules.MInternshipCourse
{
    
    public class InternshipCourseService : CommonService, IInternshipCourseService
    {
        public long Count(UserEntity userEntity, SearchInternshipCourseEntity SearchInternshipCourseEntity)
        {
            if (SearchInternshipCourseEntity == null) SearchInternshipCourseEntity = new SearchInternshipCourseEntity();
            IQueryable<InternshipCourse> InternshipCourse = IMSContext.InternshipCourses;
            InternshipCourse = SearchInternshipCourseEntity.ApplyTo(InternshipCourse);
            return InternshipCourse.Count();
        }
        //Get Using filter
        public List<InternshipCourseEntity> Get(UserEntity UserEntity, SearchInternshipCourseEntity SearchInternshipCourseEntity)
        {
            if (SearchInternshipCourseEntity == null) SearchInternshipCourseEntity = new SearchInternshipCourseEntity();       
            IQueryable<InternshipCourse> InternshipCourse = IMSContext.InternshipCourses
                 .Include(tf => tf.Student)
                 .Include(tf => tf.Company)
                 .Include(tf => tf.InternReports);
            InternshipCourse = SearchInternshipCourseEntity.ApplyTo(InternshipCourse);
            InternshipCourse = SearchInternshipCourseEntity.SkipAndTake(InternshipCourse);
            return InternshipCourse.ToList().Select(u => new InternshipCourseEntity(u, u.Student, u.Company, u.InternReports)).ToList();
        }
        //Get using StudentId, Student use
        public InternshipCourseEntity GetByStudentId(UserEntity userEntity, Guid StudentId)
        {
            InternshipCourse InternshipCourse = IMSContext.InternshipCourses.Where(s => s.StudentId.Equals(StudentId)).FirstOrDefault();
            if (InternshipCourse == null) throw new BadRequestException("Khong tim thay course");
            return new InternshipCourseEntity(InternshipCourse);
        }
        public InternshipCourseEntity Create(UserEntity userEntity, InternshipCourseEntity internshipCourseEntity)
        {
            InternshipCourse internshipCourse = internshipCourseEntity.ToModel();
            Student student = IMSContext.Students.Where(s => s.Id == userEntity.Id).FirstOrDefault();
            if (student == null) throw new BadRequestException("user khong tim thay");
            student.InternshipCourses.Add(internshipCourse);
            IMSContext.InternshipCourses.Add(internshipCourse);
            IMSContext.SaveChanges();
            return new InternshipCourseEntity(internshipCourse);
        }
        public InternshipCourseEntity Update(UserEntity userEntity, Guid internshipCourseId, InternshipCourseEntity internshipCourseEntity)
        {
            Student student = IMSContext.Students.Where(s => s.Id == userEntity.Id).FirstOrDefault();
            InternshipCourse internshipCourse = IMSContext.InternshipCourses.Where(s => s.Id == internshipCourseId).FirstOrDefault();
            if (internshipCourse == null) throw new BadRequestException("Khong tim thay course");
            internshipCourseEntity.ToModel(internshipCourse);
            IMSContext.SaveChanges();
            return new InternshipCourseEntity(internshipCourse);
        }
       
        public bool Delete(UserEntity userEntity, Guid internshipCourseId)
        {
            InternshipCourse internshipCourse = IMSContext.InternshipCourses.Where(s => s.Id == internshipCourseId).FirstOrDefault();
            if (internshipCourse == null) return false;
            Student student = IMSContext.Students.Where(s => s.Id == userEntity.Id).FirstOrDefault();
            if (student == null) return false;
            student.InternshipCourses.Remove(internshipCourse);
            IMSContext.InternshipCourses.Remove(internshipCourse);
            IMSContext.SaveChanges();
            return true;
        }
    }
}
