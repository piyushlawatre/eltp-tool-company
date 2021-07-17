import RefrenceRepo from "./rack.repo";
import { IRack } from "./rack.types";

const createRack = (rack: IRack) => RefrenceRepo.createRack(rack)

const getRack = () => RefrenceRepo.getRack();

const getRackByName = (name: string) => RefrenceRepo.getRackByName(name);

const updateRack = (rack: IRack) => RefrenceRepo.updateRack(rack);

const deleteRack = (id: string) => RefrenceRepo.deleteRack(id);

export default {
    createRack,
    getRack,
    getRackByName,
    updateRack,
    deleteRack
}