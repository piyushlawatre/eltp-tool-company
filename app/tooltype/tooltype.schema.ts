import { Schema, model, Document, } from "mongoose";
import { ITooltype } from "./tooltype.types";

const tooltypeSchema = new Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false }
}, { timestamps: true });

type tooltypeDocument = ITooltype & Document;

export const TooltypeModel = model<tooltypeDocument>("Tooltype", tooltypeSchema);