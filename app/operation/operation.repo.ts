import { OperationModel } from "./operation.schema";
import { IOperation } from "./operation.types"

const createOperation = (operation: IOperation) => OperationModel.create(operation)

const getOperation = () => OperationModel.find();

const getOperationByName = (name: string) => OperationModel.findOne({ name: name })

const updateOperation = (operation: IOperation) => OperationModel.updateOne({ _id: operation._id }, { $set: operation })

const deleteOperation = (id: string) => OperationModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })

export default {
    createOperation,
    getOperation,
    getOperationByName,
    updateOperation,
    deleteOperation
}