import { Schema, model, Document, } from "mongoose";
import { ISubtooltype } from "./subtooltype.types";

const subtooltypeSchema = new Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false }
}, { timestamps: true });

type subtooltypeDocument = ISubtooltype & Document;

export const SubtooltypeModel = model<subtooltypeDocument>("Subtooltype", subtooltypeSchema);