import SubtooltypeRepo from "./subtooltype.repo";
import { ISubtooltype } from "./subtooltype.types";

const createSubToolType = (subToolType: ISubtooltype) => SubtooltypeRepo.createSubToolType(subToolType)

const getSubToolType = () => SubtooltypeRepo.getSubToolType();

const getSubToolTypeByName = (name: string) => SubtooltypeRepo.getSubToolTypeByName(name);

const updateSubToolType = (subToolType: ISubtooltype) => SubtooltypeRepo.updateSubToolType(subToolType);

const deleteSubToolType = (id: string) => SubtooltypeRepo.deleteSubToolType(id)

export default {
    createSubToolType,
    getSubToolType,
    getSubToolTypeByName,
    updateSubToolType,
    deleteSubToolType
}