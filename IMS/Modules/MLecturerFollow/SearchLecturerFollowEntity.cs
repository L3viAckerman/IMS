using IMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MLecturerFollow
{
    public class SearchLecturerFollowEntity : FilterEntity
    {
        public Guid? StudentId { get; set; }
        public Guid? LectureId { get; set; }
        public int? Status { get; set; }
        public string Start { get; set; }
        public string End { get; set; }
        public IQueryable<LecturerFollow> ApplyTo(IQueryable<LecturerFollow> LecturerFollows)
        {
            if (StudentId != null)
                LecturerFollows = LecturerFollows.Where(u => u.StudentId == StudentId);
            if (LectureId != null)
                LecturerFollows = LecturerFollows.Where(u => u.LecturerId == LectureId);
            if (Status != null)
                LecturerFollows = LecturerFollows.Where(u => u.Status == Status);
            //if (Start != null)
            //    LecturerFollows = LecturerFollows.Where(u => u.Start >= Start);
            //if (End != null)
            //    LecturerFollows = LecturerFollows.Where(u => u.End <= End);
            return LecturerFollows;
        }
    }
}
