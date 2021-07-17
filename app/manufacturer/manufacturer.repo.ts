import { ManufacturerModel } from "./manufacturer.schema";
import { IManufacturer } from "./manufacturer.types"

const createManufacturer = (manufacturer: IManufacturer) => ManufacturerModel.create(manufacturer)

const getManufacturer = () => ManufacturerModel.find();

const getManufacturerByName = (name: string) => ManufacturerModel.findOne({ name: name })

const updateManufacturer = (manufacturer: IManufacturer) => ManufacturerModel.updateOne({ _id: manufacturer._id }, { $set: manufacturer })

const deleteManufacturer = (id: string) => ManufacturerModel.findByIdAndUpdate(id, { isDeleted: true }, { new: true })

export default {
    createManufacturer,
    getManufacturer,
    getManufacturerByName,
    updateManufacturer,
    deleteManufacturer
}