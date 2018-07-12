using IMS.Modules.MUser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MCompany
{
    public interface ICompanyService : ITransientService
    {
        long Count(UserEntity UserEntity, SearchCompanyEntity SearchCompanyEntity);
        List<CompanyEntity> Get(UserEntity UserEntity, SearchCompanyEntity SearchCompanyEntity);
        CompanyEntity Get(UserEntity UserEntity, Guid Id);
        CompanyEntity Create(UserEntity UserEntity, CompanyEntity CompanyEntity);
        CompanyEntity Update(UserEntity UserEntity, Guid Id, CompanyEntity CompanyEntity);
        bool Delete(UserEntity UserEntity, Guid Id);

    }
}
