using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMS.Models;
using IMS.Modules.MInternFollow;
using IMS.Modules.MInternNews;
using IMS.Modules.MUser;
using Microsoft.EntityFrameworkCore;

namespace IMS.Modules.MInternshipNews
{
    public class InternNewsService : CommonService, IInternNewsService
    {
        public long Count(UserEntity UserEntity, SearchInternNewsEntity searchInternNewsEntity)
        {
            if (searchInternNewsEntity == null) searchInternNewsEntity = new SearchInternNewsEntity();
            IQueryable<InternNews> internNews = IMSContext.InternNews;
            internNews = searchInternNewsEntity.ApplyTo(internNews);
            return internNews.Count();
        }
        public List<InternNewsEntity> Get(UserEntity UserEntity, SearchInternNewsEntity searchInternNewsEntity)
        {
            if (searchInternNewsEntity == null) searchInternNewsEntity = new SearchInternNewsEntity();
            IQueryable<InternNews> internNews = IMSContext.InternNews
                .Include(s => s.InternFollows)
                .Include(s => s.Company);
            internNews = searchInternNewsEntity.ApplyTo(internNews);
            internNews = searchInternNewsEntity.SkipAndTake(internNews);
            return internNews.Select(u => new InternNewsEntity(u, u.Company, u.InternFollows)).ToList();
        }
        public InternNewsEntity GetId(UserEntity UserEntity, Guid InternNewId)
        {
            InternNews internNews = IMSContext.InternNews.Where(In => In.Id == InternNewId).FirstOrDefault();
            if (internNews == null)
                throw new BadRequestException("Không tồn tại tin tuyển dụng như thế!");
            return new InternNewsEntity(internNews);
        }

        public InternNewsEntity Update(UserEntity UserEntity, Guid internNewsId, InternNewsEntity internNewsEntity)
        {
            InternNews internNews = IMSContext.InternNews.Where(s => s.Id == internNewsId).FirstOrDefault();
            if (internNews == null) throw new BadRequestException("Khong tim thay Intern News");
            internNews = internNewsEntity.ToModel(internNews);
            IMSContext.InternNews.Update(internNews);
            IMSContext.SaveChanges();
            return internNewsEntity;
        }
        public bool Delete(UserEntity UserEntity, Guid internNewsId)
        {
            InternNews internNews = IMSContext.InternNews.Where(s => s.Id == internNewsId).FirstOrDefault();
            if (internNews == null) return false;

            IMSContext.Remove(internNews);
            IMSContext.SaveChanges();
            return true;
        }
        public InternNewsEntity Create(UserEntity UserEntity, InternNewsEntity internNewsEntity)
        {
            InternNews internNews = internNewsEntity.ToModel();
            IMSContext.InternNews.Add(internNews);
            IMSContext.SaveChanges();
            return internNewsEntity;
        }

        public InternFollowEntity ChangeStatusFollow(UserEntity UserEntity, Guid InternNewsId)
        {
            var InternFollow = IMSContext.InternFollows.FirstOrDefault(If => If.InternNewsId == InternNewsId && If.StudentId == UserEntity.Id);
            if (InternFollow == null)
            {
                var InternFollowEntity = new InternFollowEntity { StudentId = UserEntity.Id, InternNewsId = InternNewsId, Status = 1 };
                InternFollow = InternFollowEntity.ToModel();
                IMSContext.InternFollows.Add(InternFollow);
            }
            else
            {
                InternFollow.Status = InternFollow.Status == 0 ? 1 : 0;
            }
            IMSContext.SaveChanges();
            return new InternFollowEntity(InternFollow);
        }

    }
}
