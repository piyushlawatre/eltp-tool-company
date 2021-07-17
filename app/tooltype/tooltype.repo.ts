import { TooltypeModel } from "./tooltype.schema";
import { ITooltype } from "./tooltype.types";

const createToolType = (toolType: ITooltype) => TooltypeModel.create(toolType)

const getToolType = () => TooltypeModel.find();

const getToolTypeByName = (name: string) => TooltypeModel.findOne({ name: name });

const updateToolType = (toolType: ITooltype) => TooltypeModel.updateOne({ _id: toolType._id }, { $set: toolType });

const deleteToolType = (id: string) => TooltypeModel.findByIdAndUpdate(id, { $set: { isDeleted: true } })

export default {
    createToolType,
    getToolType,
    getToolTypeByName,
    updateToolType,
    deleteToolType
}