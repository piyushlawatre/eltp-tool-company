import { Schema, model, Document, } from "mongoose";
import { ITool } from "./tool.types";

const toolSchema = new Schema({
    name: { type: String, required: true },
    toolImage: { type: String, required: true },
    toolOwner: { type: String, required: true },
    quantity: { type: Number, require: true },
    reOrderLevel: { type: Number, required: false },
    availableQuantity: { type: Number, required: false },
    isDeleted: { type: Boolean, required: false, default: false },
    /* ----------------------------------- Refrences ----------------------------------- */
    operation: { type: Schema.Types.ObjectId, ref: "Operator", required: true },
    bucket: { type: Schema.Types.ObjectId, ref: "Bucket", required: true },
    manufacturer: { type: Schema.Types.ObjectId, ref: "Manufacturer", required: true },
    rack: { type: Schema.Types.ObjectId, ref: "Rack", required: true },
    shelf: { type: Schema.Types.ObjectId, ref: "Shelf", required: true },
    toolType: { type: Schema.Types.ObjectId, ref: "Tooltype", required: true },
    subToolType: { type: Schema.Types.ObjectId, ref: "Subtooltype", required: true }
}, { timestamps: true });

type toolDocument = ITool & Document;

export const ToolModel = model<toolDocument>("tool", toolSchema);