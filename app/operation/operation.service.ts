import OperationRepo from "./operation.repo"
import { IOperation } from "./operation.types"

const createOperation = (operation: IOperation) => OperationRepo.createOperation(operation);

const getOperation = () => OperationRepo.getOperation();

const getOperationByName = (name: string) => OperationRepo.getOperationByName(name);

const updateOperation = (operation: IOperation) => OperationRepo.updateOperation(operation);

const deleteOperation = (id: string) => OperationRepo.deleteOperation(id)

export default {
    createOperation,
    getOperation,
    getOperationByName,
    updateOperation,
    deleteOperation
}