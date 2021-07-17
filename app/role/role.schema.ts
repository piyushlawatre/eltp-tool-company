import { model, Schema, Document } from "mongoose";
import { IRole } from "./role.types"

const roleSchema = new Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false }
}, { timestamps: true });

type RoleDocument = Document & IRole;

export const RoleModel = model<RoleDocument>("Role", roleSchema);