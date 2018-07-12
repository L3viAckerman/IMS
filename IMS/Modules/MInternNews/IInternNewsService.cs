using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IMS.Modules.MInternFollow;
using IMS.Modules.MInternNews;
using IMS.Modules.MUser;

namespace IMS.Modules.MInternshipNews
{
    public interface IInternNewsService : ITransientService
    {
        long Count(UserEntity UserEntity, SearchInternNewsEntity searchInternNewsEntity);
        List<InternNewsEntity> Get(UserEntity UserEntity, SearchInternNewsEntity searchInternNewsEntity);

        //List<InternNewsEntity> GetByCompanyId(UserEntity UserEntity, Guid CompanyId, SearchInternNewsEntity searchInternNewsEntity);
        InternNewsEntity GetId(UserEntity UserEntity, Guid InternNewsId);
        ////List<InternNewsEntity> Get(SearchInternNewsEntity searchInternNewsEntity);
        InternNewsEntity Create(UserEntity UserEntity, InternNewsEntity internNewsEntity);
        InternNewsEntity Update(UserEntity UserEntity, Guid internId, InternNewsEntity internNewsEntity);
        bool Delete(UserEntity UserEntity, Guid internNewsId);
        InternFollowEntity ChangeStatusFollow(UserEntity UserEntity, Guid InternNewsId);
    }

}
