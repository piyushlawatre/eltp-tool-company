import { Schema, model, Document, } from "mongoose";
import { IShelf } from "./shelf.types"

const shelfSchema = new Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false }
}, { timestamps: true });

type shelfDocument = IShelf & Document;

export const ShelfModel = model<shelfDocument>("Shelf", shelfSchema);