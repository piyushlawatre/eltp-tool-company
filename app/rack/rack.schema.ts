import { Schema, model, Document, } from "mongoose";
import { IRack } from "./rack.types";

const rackSchema = new Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false }
}, { timestamps: true });

type rackDocument = IRack & Document;

export const RackModel = model<rackDocument>("Rack", rackSchema);