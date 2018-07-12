using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMS.Models;
using IMS.Modules.MInternFollow;
using IMS.Modules.MInternNews;
using Microsoft.AspNetCore.Mvc;
namespace IMS.Modules.MInternshipNews
{
    [Route("api/InternNews")]
    public class InternNewsController : CommonController
    {
        public IInternNewsService internNewsService;
        public InternNewsController(IInternNewsService internNewsService)
        {
            this.internNewsService = internNewsService;
        }
        [Route("Count"), HttpGet]
        public long Count([FromQuery]SearchInternNewsEntity searchInternNewsEntity)
        {
            return internNewsService.Count(UserEntity, searchInternNewsEntity);
        }
        [Route(""), HttpGet]
        public List<InternNewsEntity> Get([FromQuery]SearchInternNewsEntity searchInternNewsEntity)
        {
            return internNewsService.Get(UserEntity, searchInternNewsEntity);
        }
        //xem một bài đăng khi có thông tin Id cụ thể
        [Route("{InternNewsId}"), HttpGet]
        public InternNewsEntity GetId([FromRoute]Guid InternNewsId)
        {
            return internNewsService.GetId(UserEntity, InternNewsId);
        }
        [Route(""), HttpPost]
        public InternNewsEntity Create([FromBody] InternNewsEntity internNewsEntity)
        {
            return internNewsService.Create(UserEntity, internNewsEntity);
        }
        [Route("{internNewsId}"), HttpPut]
        public InternNewsEntity Update([FromRoute] Guid internNewsId, [FromBody]InternNewsEntity internNewsEntity)
        {
            return internNewsService.Update(UserEntity, internNewsId, internNewsEntity);
        }
        [Route("{internNewsId}"), HttpDelete]
        public bool Delete([FromRoute] Guid internNewsId)
        {
            return internNewsService.Delete(UserEntity, internNewsId);
        }

        [Route("{InternNewsId}"), HttpPost]
        public InternFollowEntity ChangeStatusFollow(Guid InternNewsId)
        {
            return internNewsService.ChangeStatusFollow(UserEntity, InternNewsId);
        }
    }
}
