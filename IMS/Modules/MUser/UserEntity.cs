using IMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MUser
{
    public class UserEntity
    {
        public Guid Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public ROLES Roles { get; set; }
        public AdminEntity AdminEntity { get; set; }
        public UserEntity() { }

        public UserEntity(User User)
        {
            this.Id = User.Id;
            this.Username = User.Username;
            this.Password = User.Password;
            this.Roles = ROLES.USER;
            if (User.Admin != null) this.Roles &= ROLES.ADMIN;
            if (User.Student != null) this.Roles &= ROLES.STUDENT;
            if (User.Lecturer != null) this.Roles &= ROLES.LECTURER;
            if (User.HrEmployee != null) this.Roles &= ROLES.HrEmployee;

            if (User.Admin != null) this.AdminEntity = new AdminEntity(User.Admin);
        }
        public User ToModel(User User = null)
        {
            if(User == null)
            {
                User = new User();
                User.Id = Guid.NewGuid();
            }
            User.Username = this.Username;
            User.Password = this.Password;
            return User;
        }
    }

    public class AdminEntity
    {
        public Guid Id;
        public string Fullname;
        public string Organization;
        public AdminEntity() { }

        public AdminEntity(Admin Admin)
        {
            this.Id = Admin.Id;
            this.Fullname = Admin.Fullname;
            this.Organization = Admin.Organization;
        }
    }
}
