using IMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MLecturer
{
    public class SearchLecturerEntity : FilterEntity
    {
        public string Vnumail { get; set; }
        public IQueryable<Lecturer> ApplyTo(IQueryable<Lecturer> Lecturers)
        {
            if (!string.IsNullOrEmpty(Vnumail))
                Lecturers = Lecturers.Where(u => u.Vnumail.ToLower().Equals(Vnumail.ToLower()));
            return Lecturers;
        }
    }
}
