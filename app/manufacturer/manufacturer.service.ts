import ManufacturerRepo from "./manufacturer.repo";
import { IManufacturer } from "./manufacturer.types"

const createManufacturer = (manufacturer: IManufacturer) => ManufacturerRepo.createManufacturer(manufacturer)

const getManufacturer = () => ManufacturerRepo.getManufacturer();

const getManufacturerByName = (name: string) => ManufacturerRepo.getManufacturerByName(name);

const updateManufacturer = (manufacturer: IManufacturer) => ManufacturerRepo.updateManufacturer(manufacturer);

const deleteManufacturer = (id: string) => ManufacturerRepo.deleteManufacturer(id)

export default {
    createManufacturer,
    getManufacturer,
    getManufacturerByName,
    updateManufacturer,
    deleteManufacturer
}