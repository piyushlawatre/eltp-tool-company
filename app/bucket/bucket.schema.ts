import { Schema, model, Document, } from "mongoose";
import { IBucket } from "./bucket.types";

const bucketSchema = new Schema({
    name: { type: String, required: true },
    isDeleted: { type: Boolean, required: false, default: false }
}, { timestamps: true });

type bucketDocument = IBucket & Document;

export const BucketModel = model<bucketDocument>("Bucket", bucketSchema);