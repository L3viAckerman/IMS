using IMS.Models;
using IMS.Modules.MUser;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MInternFollow
{
    public class InternFollowService : CommonService, IInternFollowService
    {
        public long Count(UserEntity UserEntity, SearchInternFollowEntity SearchInternReportEntity)
        {
            if (SearchInternReportEntity == null) SearchInternReportEntity = new SearchInternFollowEntity();
            IQueryable<InternFollow> internFollows = IMSContext.InternFollows;
            internFollows = SearchInternReportEntity.ApplyTo(internFollows);
            return internFollows.Count();
        }
        //Get all, filter
        public List<InternFollowEntity> Get(UserEntity UserEntity, SearchInternFollowEntity SearchInternReportEntity)
        {
            if (SearchInternReportEntity == null) SearchInternReportEntity = new SearchInternFollowEntity();
            IQueryable<InternFollow> InternFollows = IMSContext.InternFollows
                .Include(tf => tf.Student)
                .Include(tf => tf.InternNews);
            InternFollows = SearchInternReportEntity.ApplyTo(InternFollows);
            InternFollows = SearchInternReportEntity.SkipAndTake(InternFollows);
            return InternFollows.ToList().ConvertAll(u => new InternFollowEntity(u, u.Student, u.InternNews)).ToList();
        }
        //Get List<InternFfollow> by using UserEntity, It is not used in the Controller
        public List<InternFollowEntity> GetInternFollows(UserEntity userEntity)
        {
            Student student = IMSContext.Students.Where(s => s.Id == userEntity.Id).FirstOrDefault();
            List<InternFollow> internFollows = IMSContext.InternFollows.Where(s => s.StudentId == student.Id)
                .Include(tf => tf.Student)
                .Include(tf => tf.InternNews)
                .ToList();
            if (internFollows == null) throw new BadRequestException("InternFollow khong tim thay");
            return internFollows.Select(u => new InternFollowEntity(u)).ToList();
        }
        public bool Delete(UserEntity userEntity, Guid internNewsId)
        {
            Student student = IMSContext.Students.Where(s => s.Id == userEntity.Id).FirstOrDefault();
            if (student == null) return false;
            InternFollow internFollows = IMSContext.InternFollows.Where(s => s.InternNewsId == internNewsId && s.StudentId == student.Id).FirstOrDefault();
            if (internFollows == null) return false;
            student.InternFollows.Remove(internFollows);
            IMSContext.InternFollows.Remove(internFollows);
            IMSContext.SaveChanges();
            return true;
        }
        public InternFollowEntity Create(UserEntity UserEntity, InternFollowEntity InternFollowEntity)
        {
            InternFollow InternFollow = InternFollowEntity.ToModel();
            IMSContext.InternFollows.Add(InternFollow);
            IMSContext.SaveChanges();
            return InternFollowEntity;
        }
        public InternFollowEntity Update(UserEntity UserEntity, Guid internNewsId, InternFollowEntity InternFollowEntity)
        {
            InternFollow InternFollow = IMSContext.InternFollows.Where(s => s.Id == internNewsId).FirstOrDefault();
            if (InternFollow == null) throw new BadRequestException("Khong tim thay Intern News");
            InternFollow = InternFollowEntity.ToModel(InternFollow);
            IMSContext.InternFollows.Update(InternFollow);
            IMSContext.SaveChanges();
            return InternFollowEntity;
        }
    }
}
