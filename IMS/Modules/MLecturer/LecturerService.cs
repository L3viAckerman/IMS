using IMS.Models;
using IMS.Modules.MUser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace IMS.Modules.MLecturer
{
    public class OperationService : CommonService, ILecturerService
    {
        public OperationService():base()
        {
        }
        public long Count(UserEntity UserEntity, SearchLecturerEntity SearchLecturerEntity)
        {
            if (SearchLecturerEntity == null) SearchLecturerEntity = new SearchLecturerEntity();
            IQueryable<Lecturer> Lecturers = IMSContext.Lecturers;
            Lecturers = SearchLecturerEntity.ApplyTo(Lecturers);
            return Lecturers.Count();
        }
        public List<OperationEntity> Get(UserEntity UserEntity, SearchLecturerEntity SearchLecturerEntity)
        {
            if (SearchLecturerEntity == null) SearchLecturerEntity = new SearchLecturerEntity();
            IQueryable<Lecturer> Lecturers = IMSContext.Lecturers;
            Lecturers = SearchLecturerEntity.ApplyTo(Lecturers);
            Lecturers = SearchLecturerEntity.SkipAndTake(Lecturers);
            return Lecturers.ToList().Select(u => new OperationEntity(u)).ToList();
        }
        public OperationEntity Get(UserEntity UserEntity, Guid LecturerId)
        {
            Lecturer Lecturer = IMSContext.Lecturers.Where(u => u.Id == LecturerId).FirstOrDefault();
            if (Lecturer == null)
                throw new BadRequestException("Lecturer không tồn tại");
            return new OperationEntity(Lecturer);
        }
        public OperationEntity Create(UserEntity UserEntity, OperationEntity LecturerEntity)
        {
            Lecturer Lecturer = LecturerEntity.ToModel();
            User User = new User() { Id = Lecturer.Id, Username = Lecturer.FullName, Password = "123" };
            IMSContext.Users.Add(User);
            IMSContext.Lecturers.Add(Lecturer);
            IMSContext.SaveChanges();
            return LecturerEntity;
        }
        public OperationEntity Update(UserEntity UserEntity, Guid LecturerId, OperationEntity LecturerEntity)
        {
            Lecturer Lecturer = IMSContext.Lecturers.Where(l => l.Id == LecturerId).FirstOrDefault();
            LecturerEntity.ToModel(Lecturer);
            IMSContext.SaveChanges();
            return LecturerEntity;
        }
        public bool Delete(UserEntity UserEntity, Guid LecturerId)
        {
            Lecturer Lecturer = IMSContext.Lecturers.Where(l => l.Id == LecturerId).FirstOrDefault();
            if (Lecturer == null)
                throw new BadRequestException("Lecturer không tồn tại.");
            IMSContext.Lecturers.Remove(Lecturer);
            IMSContext.SaveChanges();
            return true;
        }
      
    }
}
