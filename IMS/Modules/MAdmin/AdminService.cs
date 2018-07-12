using IMS.Models;
using IMS.Modules.MUser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace IMS.Modules.MAdmin
{
    public class AdminService : CommonService, IAdminService
    {
        public AdminService() : base()
        {
        }
        public long Count(UserEntity userEntity, SearchAdminEntity searchAdminEntity)
        {
            if (searchAdminEntity == null) searchAdminEntity = new SearchAdminEntity();
            IQueryable<Admin> admins = IMSContext.Admins;
            admins = searchAdminEntity.ApplyTo(admins);
            return admins.Count();
        }
        public List<AdminEntity> Get(UserEntity userEntity, SearchAdminEntity searchAdminEntity)
        {
            if (searchAdminEntity == null) searchAdminEntity = new SearchAdminEntity();
            IQueryable<Admin> admins = IMSContext.Admins;
            admins = searchAdminEntity.ApplyTo(admins);
            admins = searchAdminEntity.SkipAndTake(admins); 
            return admins.ToList().Select(a => new AdminEntity(a)).ToList();
        }
        public AdminEntity Get(UserEntity userEntity, Guid Id)
        {
            Admin admin = IMSContext.Admins.Where(a => a.Id == Id).FirstOrDefault();
            if (admin == null)
            {
                throw new BadRequestException("Admin không tồn tại!");
            }
            return new AdminEntity(admin); 

        }
        public AdminEntity Create(UserEntity userEntity, AdminEntity adminEntity)
        {
            Admin admin = adminEntity.ToModel();
            User User = new User() { Id = admin.Id, Username = adminEntity.Fullname, Password = "123" };
            IMSContext.Users.Add(User);
            IMSContext.Admins.Add(admin);
            IMSContext.SaveChanges();
            return adminEntity;
        }
        public AdminEntity Update(UserEntity userEntity, Guid Id, AdminEntity adminEntity)
        {
            Admin admin = IMSContext.Admins.Where(a => a.Id == Id).FirstOrDefault();
            adminEntity.ToModel(admin);
            IMSContext.SaveChanges();
            return adminEntity;
        }
        public bool Delete(UserEntity userEntity, Guid Id)
        {
            Admin admin = IMSContext.Admins.Where(a => a.Id == Id).FirstOrDefault();
            if (admin == null)
            {
                throw new BadRequestException("Admin không tồn tại!");
            }
            IMSContext.Remove(admin);
            IMSContext.SaveChanges();
            return true;
        }
    }
}
