import { Schema, model, Document, } from "mongoose";
import { IOperation } from "./operation.types"

const operationSchema = new Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false }
}, { timestamps: true });

type OperationDocument = IOperation & Document;

export const OperationModel = model<OperationDocument>("Operation", operationSchema);