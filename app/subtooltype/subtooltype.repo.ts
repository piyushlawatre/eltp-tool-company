import { SubtooltypeModel } from "./subtooltype.schema";
import { ISubtooltype } from "./subtooltype.types";

const createSubToolType = (subToolType: ISubtooltype) => SubtooltypeModel.create(subToolType)

const getSubToolType = () => SubtooltypeModel.find();

const getSubToolTypeByName = (name: string) => SubtooltypeModel.findOne({ name: name })

const updateSubToolType= (subToolType: ISubtooltype) => SubtooltypeModel.updateOne({ _id: subToolType._id }, { $set: subToolType })

const deleteSubToolType = (id: string) => SubtooltypeModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })

export default {
    createSubToolType,
    getSubToolType,
    getSubToolTypeByName,
    updateSubToolType,
    deleteSubToolType
}