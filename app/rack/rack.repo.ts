import { RackModel } from "./rack.schema";
import { IRack } from "./rack.types";

const createRack = (rack: IRack) => RackModel.create(rack)

const getRack = () => RackModel.find();

const getRackByName = (name: string) => RackModel.findOne({ name: name })

const updateRack = (rack: IRack) => RackModel.updateOne({ _id: rack._id }, { $set: rack })

const deleteRack = (id: string) => RackModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })

export default {
    createRack,
    getRack,
    getRackByName,
    updateRack,
    deleteRack
}