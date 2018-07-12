using IMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MOperation
{
    public class SearchOperationEntity : FilterEntity
    {
        public int? Role { get; set; }
        public IQueryable<Operation> ApplyTo(IQueryable<Operation> Operation)
        {
            if (Role.HasValue)
                Operation = Operation.Where(u => u.Role == Role);
            return Operation;
        }
    }
}
