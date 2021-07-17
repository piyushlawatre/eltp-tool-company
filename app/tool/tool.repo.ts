import { ToolModel } from "../tool/tool.schema";
import { ITool } from "./tool.types";

const createTool = (tool: ITool) => ToolModel.create(tool)

const getTool = () => ToolModel.find();

const getToolByName = (name: string) => ToolModel.findOne({ name: name });

const updateTool = (tool: ITool) => ToolModel.updateOne({ _id: tool._id }, { $set: tool });

const deleteTool = (id: string) => ToolModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })

export default {
    createTool,
    getTool,
    getToolByName,
    updateTool,
    deleteTool
}
