import { Schema, model, Document, } from "mongoose";
import { IManufacturer } from "./manufacturer.types"

const manufacturerSchema = new Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false }
}, { timestamps: true });

type manufacturerDocument = IManufacturer & Document;

export const ManufacturerModel = model<manufacturerDocument>("Manufacturer", manufacturerSchema);