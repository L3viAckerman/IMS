using IMS.Models;
using IMS.Modules.MUser;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace IMS.Modules.MOperation
{
    public class OperationService : CommonService, IOperationService
    {
        public OperationService():base()
        {
        }
        public long Count(UserEntity UserEntity, SearchOperationEntity SearchOperationEntity)
        {
            if (SearchOperationEntity == null) SearchOperationEntity = new SearchOperationEntity();
            IQueryable<Operation> Operation = IMSContext.Operations;
            Operation = SearchOperationEntity.ApplyTo(Operation);
            return Operation.Count();
        }
        public List<OperationEntity> Get(UserEntity UserEntity, SearchOperationEntity SearchOperationEntity)
        {
            if (SearchOperationEntity == null) SearchOperationEntity = new SearchOperationEntity();
            IQueryable<Operation> Operation = IMSContext.Operations;
            Operation = SearchOperationEntity.ApplyTo(Operation);
            Operation = SearchOperationEntity.SkipAndTake(Operation);
            return Operation.ToList().Select(u => new OperationEntity(u)).ToList();
        }
        public OperationEntity Get(UserEntity UserEntity, Guid OperationId)
        {
            Operation Operation = IMSContext.Operations.Where(u => u.Id == OperationId).FirstOrDefault();
            if (Operation == null)
                throw new BadRequestException("Operation không tồn tại");
            return new OperationEntity(Operation);
        }
        public OperationEntity Create(UserEntity UserEntity, OperationEntity OperationEntity)
        {
            Operation Operation = OperationEntity.ToModel();
            IMSContext.Operations.Add(Operation);
            IMSContext.SaveChanges();
            return OperationEntity;
        }
        public OperationEntity Update(UserEntity UserEntity, Guid OperationId, OperationEntity LecturerEntity)
        {
            Operation Operation = IMSContext.Operations.Where(l => l.Id == OperationId).FirstOrDefault();
            LecturerEntity.ToModel(Operation);
            IMSContext.SaveChanges();
            return LecturerEntity;
        }
        public bool Delete(UserEntity UserEntity, Guid OperationId)
        {
            Operation Operation = IMSContext.Operations.Where(l => l.Id == OperationId).FirstOrDefault();
            if (Operation == null)
                throw new BadRequestException("Operation không tồn tại.");
            IMSContext.Operations.Remove(Operation);
            IMSContext.SaveChanges();
            return true;
        }
      
    }
}
