using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MInternFollow 
{
    [Route("api/InternFollows")]
    public class InternFollowController : CommonController
    {
        public IInternFollowService InternFollowService;
        public InternFollowController(IInternFollowService InternFollowService) 
        {
            this.InternFollowService = InternFollowService;
        }
        [Route("Count"), HttpGet]
        public long Count(SearchInternFollowEntity SearchInternReportEntity)
        {
            return InternFollowService.Count(UserEntity, SearchInternReportEntity);
        }
        [Route(""), HttpGet]
        public List<InternFollowEntity> Get(SearchInternFollowEntity SearchInternReportEntity)
        {
            return InternFollowService.Get(UserEntity, SearchInternReportEntity);
        }
        ////Use by student
        //[Route("Student/{studentId}"), HttpGet]
        //public List<InternFollowEntity> GetInternFollows([FromRoute]Guid studentId)
        //{
        //    return InternFollowService.GetInternFollows(UserEntity, studentId);
        //}
        ////Use by Hr
        //[Route("HR/{InternNewsId}"), HttpGet]
        //public List<InternFollowEntity> GetInternFollowsByInternNewsId([FromRoute]Guid InternNewsId)
        //{
        //    return InternFollowService.GetInternFollowsByInternNewsId(UserEntity, InternNewsId);
        //}
        ////Get list of student intern
        //[Route("HR/InternStudent/{InternNewsId}"), HttpGet]
        //public List<InternFollowEntity> GetInternStudent([FromRoute]Guid InternNewsId)
        //{
        //    return InternFollowService.GetInternStudent(UserEntity, InternNewsId);
        //}
        //[HttpGet]
        //public List<InternFollowEntity> GetInternFollows()
        //{
        //    return InternFollowService.GetInternFollows(UserEntity);
        //}
        [Route(""), HttpPost]
        public InternFollowEntity Create([FromBody] InternFollowEntity internNewsEntity)
        {
            return InternFollowService.Create(UserEntity, internNewsEntity);
        }
        [Route("{internNewsId}"), HttpPut]
        public InternFollowEntity Update([FromRoute] Guid internNewsId, [FromBody]InternFollowEntity InternFollowEntity)
        {
            return InternFollowService.Update(UserEntity, internNewsId, InternFollowEntity);
        }
        [HttpDelete("{internNewsId}")]
        public bool Delete([FromRoute] Guid internNewsId)
        {
            return InternFollowService.Delete(UserEntity, internNewsId);
        }

      

    }
}
