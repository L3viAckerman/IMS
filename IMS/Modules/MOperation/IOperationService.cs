using IMS.Modules.MUser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MOperation
{
    public interface IOperationService : ITransientService
    {
        long Count(UserEntity UserEntity, SearchOperationEntity SearchOperationEntity);
        List<OperationEntity> Get(UserEntity UserEntity, SearchOperationEntity SearchOperationEntity);
        OperationEntity Get(UserEntity UserEntity, Guid LecturerId);
        OperationEntity Create(UserEntity UserEntity, OperationEntity OperationEntity);
        OperationEntity Update(UserEntity UserEntity, Guid LecturerId, OperationEntity OperationEntity);
        bool Delete(UserEntity UserEntity, Guid LecturerId);
    }
}
