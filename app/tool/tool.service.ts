import ToolRepo from "../tool/tool.repo";
import { ITool } from "./tool.types";

const createTool = (tool: ITool) => ToolRepo.createTool(tool)

const getTool = () => ToolRepo.getTool();

const getToolByName = (name: string) => ToolRepo.getToolByName(name);

const updateTool = (tool: ITool) => ToolRepo.updateTool(tool);

const deleteTool = (id: string) => ToolRepo.deleteTool(id)

export default {
    createTool,
    getTool,
    getToolByName,
    updateTool,
    deleteTool
}