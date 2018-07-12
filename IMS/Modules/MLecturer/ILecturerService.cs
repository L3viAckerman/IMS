using IMS.Modules.MUser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace IMS.Modules.MLecturer
{
    public interface ILecturerService : ITransientService
    {
        long Count(UserEntity UserEntity, SearchLecturerEntity SearchLecturerEntity);
        List<OperationEntity> Get(UserEntity UserEntity, SearchLecturerEntity SearchLecturerEntity);
        OperationEntity Get(UserEntity UserEntity, Guid LecturerId);
        OperationEntity Create(UserEntity UserEntity, OperationEntity LecturerEntity);
        OperationEntity Update(UserEntity UserEntity, Guid LecturerId, OperationEntity LecturerEntity);
        bool Delete(UserEntity UserEntity, Guid LecturerId);
    }
}
