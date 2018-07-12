using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace IMS.Modules.MLecturer
{
    [Route("api/Lecturers")]
    public class OperationController : CommonController
    {
        public ILecturerService LecturerService;
        public OperationController(ILecturerService LecturerService)
        {
            this.LecturerService = LecturerService;
        }

        [Route("Count"), HttpGet]
        public long Count(SearchLecturerEntity SearchLecturerEntity)
        {
            return LecturerService.Count(UserEntity, SearchLecturerEntity);
        }

        [Route(""), HttpGet]
        public List<OperationEntity> Get(SearchLecturerEntity SearchLecturerEntity)
        {
            return LecturerService.Get(UserEntity, SearchLecturerEntity);
        }
        [Route("{LecturerId}"), HttpGet]
        public OperationEntity Get(Guid LecturerId)
        {
            return LecturerService.Get(UserEntity, LecturerId);
        }
        [Route(""), HttpPost]
        public OperationEntity Create([FromBody]OperationEntity LecturerEntity)
        {
            return LecturerService.Create(UserEntity, LecturerEntity);
        }
        [Route("{LecturerId}"), HttpPut]
        public OperationEntity Update(Guid LecturerId, [FromBody]OperationEntity LecturerEntity)
        {
            return LecturerService.Update(UserEntity, LecturerId, LecturerEntity);
        }
        [Route("{LecturerId}"), HttpDelete]
        public bool Delete(Guid LecturerId)
        {
            return LecturerService.Delete(UserEntity, LecturerId);
        }
    }
}