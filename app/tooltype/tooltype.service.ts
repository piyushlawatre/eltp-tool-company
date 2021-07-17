import TooltypeRepo from "./tooltype.repo";
import { ITooltype } from "./tooltype.types";

const createToolType = (toolType: ITooltype) => TooltypeRepo.createToolType(toolType)

const getToolType = () => TooltypeRepo.getToolType();

const getToolTypeByName = (name: string) => TooltypeRepo.getToolTypeByName(name);

const updateToolType = (toolType: ITooltype) => TooltypeRepo.updateToolType(toolType);

const deleteToolType = (id: string) => TooltypeRepo.deleteToolType(id)

export default {
    createToolType,
    getToolType,
    getToolTypeByName,
    updateToolType,
    deleteToolType
}