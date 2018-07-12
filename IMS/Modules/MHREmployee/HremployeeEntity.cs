﻿using IMS.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMS.Modules.MHrEmployee;

namespace IMS.Modules.MHrEmployee
{
    public class HrEmployeeEntity
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public Guid? CompanyId { get; set; }
        public string Display { get; set; }
        public long Cx { get; set; }
        public HrEmployeeEntity() { }
        public HrEmployeeEntity(HrEmployee HrEmployee)
        {
            this.Id = HrEmployee.Id;
            this.CompanyId = HrEmployee.CompanyId;
            this.Display = HrEmployee.Display;
            this.Name = HrEmployee.Name;
            this.Cx = HrEmployee.Cx;
        }
        public HrEmployee ToModel(HrEmployee HrEmployee = null)
        {
            if(HrEmployee == null)
            {
                HrEmployee = new HrEmployee();
                HrEmployee.Id = Guid.NewGuid();
            }
            HrEmployee.Id = this.Id;
            HrEmployee.CompanyId = this.CompanyId;
            HrEmployee.Display = this.Display;
            HrEmployee.Name = this.Name;
            HrEmployee.Cx = this.Cx;
            return HrEmployee;

        }

    }
}

