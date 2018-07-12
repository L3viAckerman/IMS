using IMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMS.Modules.MUser;
using System.ComponentModel.DataAnnotations;
using IMS.Modules.MLecturer;
using IMS.Modules.MStudent;

namespace IMS.Modules.MLecturerFollow
{
    public class LecturerFollowEntity
    {
        public Guid Id { get; set; }
        public Guid StudentId { get; set; }
        public Guid LecturerId { get; set; }
        public int Status { get; set; }
        public string Start { get; set; }
        public string End { get; set; }

        public OperationEntity LecturerEntity { get; set; }
        public StudentEntity StudentEntity { get; set; }

        public LecturerFollowEntity() { }

        public LecturerFollowEntity(LecturerFollow LecturerFollow, params object[] args )
        {
            this.Id = LecturerFollow.Id;
            this.StudentId = LecturerFollow.StudentId;
            this.LecturerId = LecturerFollow.LecturerId;
            this.Status = LecturerFollow.Status;
            this.LecturerEntity = LecturerFollow.Lecturer == null ? null : new OperationEntity(LecturerFollow.Lecturer);
            this.StudentEntity = LecturerFollow.Student == null ? null : new StudentEntity(LecturerFollow.Student);
            //this.Start = LecturerFollow.Start;
            //this.End = LecturerFollow.End;
            foreach (var arg in args)
            {
                if (arg is Company)
                    this.LecturerEntity = LecturerFollow.Lecturer == null ? null : new OperationEntity(arg as Lecturer);
                if (arg is Student)
                    this.StudentEntity = LecturerFollow.Student == null ? null : new StudentEntity(arg as Student);
            }
        }

        public LecturerFollow ToModel(LecturerFollow LecturerFollow = null)
        {
            if (LecturerFollow == null)
            {
                LecturerFollow = new LecturerFollow();
                LecturerFollow.Id = Guid.NewGuid();
            }
            LecturerFollow.LecturerId = this.LecturerId;
            LecturerFollow.Status = this.Status;
            LecturerFollow.Start = this.Start;
            LecturerFollow.End = this.End;
            return LecturerFollow;
        }
    }
}
