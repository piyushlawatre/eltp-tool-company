import { ShelfModel } from "./shelf.schema";
import { IShelf } from "./shelf.types";

const createShelf = (shelf: IShelf) => ShelfModel.create(shelf)

const getShelf = () => ShelfModel.find();

const getShelfByName = (name: string) => ShelfModel.findOne({ name: name })

const updateShelf = (shelf: IShelf) => ShelfModel.updateOne({ _id: shelf._id }, { $set: shelf })

const deleteShelf = (id: string) => ShelfModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })

export default {
    createShelf,
    getShelf,
    getShelfByName,
    updateShelf,
    deleteShelf
}